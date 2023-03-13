import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";
import "../LoginForm.css";
import FirebaseAuthService from "../FirebaseAuthService";
import SocialLogin from "./SocialLogin.js";
import NotYetImplemented from "./NotYetImplemented.js";
import { Formik } from "formik";
import * as Yup from "yup";

//TODO create mail for reset password
//TODO design reset mail page, if it is possible
//TODO Adding google and github login
//TODO Adding Logout
//TODO handle too many request failed, reset password
//TODO faire quelquechose quand le signup est reussi!

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalide").required("Email requis"),
    password: Yup.string().required("Mot de passe requis"),
});

const LoginForm = ({ onToggleSignup }) => {
    const [networkName, setNetworkName] = useState("");
    const [showNotImplemented, setShowNotImplemented] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleLogin = async (values, { setFieldError }) => {
        try {
            await FirebaseAuthService.loginUser(values.email, values.password);
            // Code to handle successful login
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setFieldError("password", "Le mot de passe est incorrect");
                setShowForgotPassword(true);
            } else {
                console.error(error);
            }
        }
    };

    const handleSocialClick = (buttonId) => {
        const socialNetworks = {
            google: "Google",
            github: "Github",
            plus: "plus",
        };
        setNetworkName(socialNetworks[buttonId]);
        // Render custom component to inform user that the feature is not yet implemented
        setShowNotImplemented(true);
        setTimeout(() => {
            setShowNotImplemented(false);
        }, 30000);
    };

    const handleSignupClick = (e) => {
        // function to handle signup click event
        e.preventDefault(); // prevent default behavior
        onToggleSignup(); // call onToggleSignup() function
    };

    return (
        <div className="login-form-container">
            <h2>Connectez-vous</h2>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    remember: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {(formik) => (
                    <Form name="basic" onFinish={formik.handleSubmit}>
                        <Form.Item
                            label="Adresse email"
                            name="email"
                            validateStatus={formik.errors.email ? "error" : ""}
                            help={formik.errors.email}
                        >
                            <Input
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Mot de passe"
                            name="password"
                            validateStatus={
                                formik.errors.password ? "error" : ""
                            }
                            help={
                                formik.errors.password ||
                                (formik.touched.password &&
                                    formik.touched.password.error)
                            }
                        >
                            <Input.Password
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox
                                name="remember"
                                checked={formik.values.remember}
                                onChange={formik.handleChange}
                            >
                                Se souvenir de moi
                            </Checkbox>
                        </Form.Item>

                        {showForgotPassword && (
                            <Form.Item>
                                <div className="forgot-password">
                                    <a
                                        href="#"
                                        onClick={() =>
                                            FirebaseAuthService.sendPasswordResetEmail(
                                                formik.values.email
                                            )
                                        }
                                    >
                                        Mot de passe oublié ?
                                    </a>
                                </div>
                            </Form.Item>
                        )}

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Se connecter
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Formik>

            <div className="social-login-container">
                <SocialLogin onClick={handleSocialClick} />
            </div>

            <p>
                Vous n'avez pas encore de compte ?{" "}
                <a href="#" onClick={handleSignupClick}>
                    Inscrivez-vous ici
                </a>
            </p>

            {showNotImplemented && (
                <div className="not-implemented-container">
                    <NotYetImplemented feature={networkName} />
                </div>
            )}
        </div>
    );
};

LoginForm.propTypes = {
    onToggleSignup: PropTypes.func.isRequired,
};

export default LoginForm;


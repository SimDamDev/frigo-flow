import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";
import "../LoginForm.css";
import FirebaseAuthService from "../FirebaseAuthService";
import SocialLogin from "./SocialLogin.js";
import NotYetImplemented from "./NotYetImplemented.js";
import EmailPasswordFields from "./EmailPasswordFields";

const LoginForm = ({ onToggleSignup }) => {
    const [networkName, setNetworkName] = useState("");
    const [showNotImplemented, setShowNotImplemented] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleInputChange = (e) => {
        // Get the current value from the form
        const { name, value, checked } = e.target;
        // Update the formData object
        setFormData({
            ...formData,
            [name]: name === "remember" ? checked : value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await FirebaseAuthService.loginUser(
                formData.email,
                formData.password
            );
            // Code to handle successful login
        } catch (error) {
            // Code to handle login error
            console.error(error);
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
            <Form name="basic" onFinish={handleLogin}>
                <EmailPasswordFields
                    initialValues={{ email: "", password: "" }}
                    onSubmit={handleLogin}
                />

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox
                        name="remember"
                        checked={formData.remember}
                        onChange={handleInputChange}
                    >
                        Se souvenir de moi
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Se connecter
                    </Button>
                </Form.Item>
            </Form>

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

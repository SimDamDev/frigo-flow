import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Space } from "antd";
import "../../LoginForm.css";
import FirebaseAuthService from "../../FirebaseAuthService";
import FieldsStep1 from "./FieldsStep1";
import FieldsStep2 from "./FieldsStep2";
import SocialLogin from "../SocialLogin.js";
import NotYetImplemented from "../NotYetImplemented.js";
import { Formik } from "formik";
import * as Yup from "yup";


//TODO image de profil!??
//TODO Recapitulatif des infos??
//TODO ajouter complexité mot de passe
//TODO add a placeholder profile picture generated like google (letter in cirlcle random colors)
//TODO ajouter conditions generales et politique de protection des donnéé
//TODO ajouter verification de mail deja existant dans le database, proposer login a la place
//TODO faire quelquechose quand le signup est reussi!


const SignupForm = ({ onToggleSignup }) => {
    const [networkName, setNetworkName] = useState("");
    const [showNotImplemented, setShowNotImplemented] = useState(false);
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const validationSchemaStep1 = Yup.object().shape({
        email: Yup.string().email("Email invalide").required("Email requis "),
        password: Yup.string().required("Mot de passe requis").min(8),
    });

    const handleSignup = async (values) => {
        try {
            await FirebaseAuthService.registerUser(email, password, {
                email: values.email,
                password: values.password,
            });
            // Code to handle successful signup
        } catch (error) {
            console.error(error);
        }
    };

    const handleNextClick = (values) => {
        if (step === 1) {
            setEmail(values.email);
            setPassword(values.password);
            setStep(step + 1);
        } else if (step === 2) {
            setFirstName(values.firstName);
            setLastName(values.lastName);
            setBirthdate(values.birthdate);
            setStep(step + 1);
        }
    };

    const handleBackClick = () => {
        setStep(step - 1);
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

    const handleLoginClick = (e) => {
        // function to handle login click event
        e.preventDefault(); // prevent default behavior
        onToggleSignup(); // call onToggleLogin() function
    };

    return (
        <div className="login-form-container">
            {step === 1 && (
                <div>
                    <h2>Inscription</h2>
                    <FieldsStep1
                        handleNextClick={handleNextClick}
                        validationSchema={validationSchemaStep1}
                    />
                </div>
            )}
            {step === 2 && <FieldsStep2
                handleNextClick={handleNextClick}
                handleBackClick={handleBackClick}
            />}

            {step === 3 && (
                <>
                    <h2>Inscription</h2>
                    <Formik
                        initialValues={{
                            email,
                            password,
                            firstName,
                            lastName,
                            birthdate,
                        }}
                        onSubmit={handleSignup}
                    >
                        {(formik) => (
                            <>
                                <p>
                                    Vérifiez vos informations avant de vous
                                    inscrire :
                                </p>

                                <Button
                                    type="primary"
                                    onClick={formik.handleSubmit}
                                >
                                    S'inscrire
                                </Button>
                                <Button
                                    type="default"
                                    onClick={handleBackClick}
                                >
                                    Retour
                                </Button>
                            </>
                        )}
                    </Formik>
                </>
                
            )}
            <div className="social-login-container">
                <SocialLogin onClick={handleSocialClick} />
            </div>

            <p>
                Vous avez deja un  compte ?{" "}
                <a href="#" onClick={handleLoginClick}>
                    Connectez-vous ici
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


            

SignupForm.propTypes = {
    onToggleLogin: PropTypes.func.isRequired,
};

export default SignupForm;

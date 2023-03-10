import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "../LoginForm.css";
import FirebaseAuthService from "../FirebaseAuthService";
import EmailPasswordFields from "./EmailPasswordFields";

const SignupForm = ({ onToggleSignup }) => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignup = async () => {
        try {
            const user = {
                firstName,
                lastName,
                email,
                password,
            };
            await FirebaseAuthService.signupUser(user);
            // Code to handle successful signup
        } catch (error) {
            // Code to handle signup error
            console.error(error);
        }
    };

    const handleNextStep = () => setStep(step + 1);
    const handlePrevStep = () => setStep(step - 1);

    const image = <circle cx="25" cy="25" r="20" fill="red" />;

    const handleSigninClick = (e) => {
        e.preventDefault();
        onToggleSignup();
    };

    return (
        <div className="login-form-container">
            <h2>Inscription</h2>
            {step === 1 && (
                <Form name="basic">
                    <EmailPasswordFields
                        initialValues={{ email: "", password: "" }}
                        onSubmit={handleSignup}
                    />

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={handleNextStep}
                        >
                            Suivant
                        </Button>
                    </Form.Item>
                </Form>
            )}
            {step === 2 && (
                <div>
                    <p>Etape 2 - A impl??menter</p>
                    <Button type="primary" onClick={handleNextStep}>
                        Suivant
                    </Button>
                    <Button onClick={handlePrevStep}>Pr??c??dent</Button>
                </div>
            )}
            {step === 3 && (
                <div>
                    <p>Etape 3 - A impl??menter</p>
                    <Button type="primary" onClick={handleSignup}>
                        S'inscrire
                    </Button>
                    <Button onClick={handlePrevStep}>Pr??c??dent</Button>
                </div>
            )}
            <p>
                Vous avez d??j?? un compte ?
                <a href="#" onClick={handleSigninClick}>
                    Inscrivez-vous ici
                </a>
            </p>
        </div>
    );
};

export default SignupForm;

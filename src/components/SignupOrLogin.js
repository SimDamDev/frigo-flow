import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function SignupOrLogin() {
    const [isSigningUp, setIsSigningUp] = useState(false);

    const toggleIsSigningUp = () => {
        setIsSigningUp(!isSigningUp);
    };

    const Form = isSigningUp ? SignupForm : LoginForm;

    return <Form onToggleSignup={toggleIsSigningUp} />;
}

export default SignupOrLogin;

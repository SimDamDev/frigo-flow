import React, { useState } from "react";
import HorizontalMenu from "./components/HorizontalMenu";
import LoginForm from "./components/LoginForm";
import FirebaseAuthService from "./FirebaseAuthService";
import "./App.css";
import firebase from "./FirebaseConfig";

function App() {
    const [activeMenu, setActiveMenu] = useState("");

    const handleMenuClick = (key) => {
        setActiveMenu(key);
    };

    return (
        <div className="App">
            <header className="App-header">Frigo Flow</header>
            <body>
                <HorizontalMenu
                    onMenuClick={handleMenuClick}
                    activeMenu={activeMenu}
                />
                {activeMenu === "login" ? <LoginForm /> : null}
            </body>
        </div>
    );
}

export default App;

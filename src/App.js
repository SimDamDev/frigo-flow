import React, { useState } from "react";
import HorizontalMenu from "./components/HorizontalMenu";
import SignupOrLogin from "./components/SignupOrLogin";
import "./App.css";

function App() {
    const [activeMenuKey, setActiveMenuKey] = useState("");

    const handleMenuClick = (menuKey) => {
        setActiveMenuKey(menuKey);
    };

    const showLoginComponent = () => {
        return activeMenuKey === "login" ? <SignupOrLogin /> : null;
    };

    return (
        <div className="App">
            <header className="App-header">Frigo Flow</header>
            <main>
                <HorizontalMenu
                    onMenuClick={handleMenuClick}
                    activeMenu={activeMenuKey}
                />
                {showLoginComponent()}
            </main>
        </div>
    );
}

export default App;

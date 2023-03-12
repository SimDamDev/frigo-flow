import React from "react";
import { Menu } from "antd";

const HorizontalMenu = ({ onMenuClick, activeMenu }) => {
    const handleMenuClick = (e) => {
        onMenuClick(e.key);
    };

    const menuItems = [
        { key: "home", label: "Accueil" },
        { key: "database", label: "Database" },
        { key: "add ingredient", label: "Ajouter ingredients" },
        { key: "add recipes", label: "Ajouter recettes" },
        {
            key: "login",
            label: "Login",
            style: { marginLeft: "auto" },
        },
    ];

    return (
        <Menu
            mode="horizontal"
            onClick={handleMenuClick}
            selectedKeys={[activeMenu]}
            items={menuItems}
        />
    );
};

export default HorizontalMenu;

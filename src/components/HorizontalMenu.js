import React from "react";
import { Menu } from "antd";

const HorizontalMenu = ({ onMenuClick, activeMenu }) => {
    const handleMenuClick = (e) => {
        onMenuClick(e.key);
    };

    return (
        <Menu
            mode="horizontal"
            onClick={handleMenuClick}
            selectedKeys={[activeMenu]}
        >
            <Menu.Item key="home">Accueil</Menu.Item>
            <Menu.Item key="database">Database</Menu.Item>
            <Menu.Item key="add ingredient">Ajouter ingredients</Menu.Item>
            <Menu.Item key="add recipes">Ajouter recettes</Menu.Item>
            <Menu.Item key="login" style={{ marginLeft: "auto" }}>
                Login
            </Menu.Item>
        </Menu>
    );
};

export default HorizontalMenu;

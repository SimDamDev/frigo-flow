import React from "react";
// eslint-disable-next-line no-unused-vars
import { Component } from "react";
import { Menu } from "antd";

const HorizontalMenu = () => {
    return (
        <Menu mode="horizontal">
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

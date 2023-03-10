import React, { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";
import { Form, Input, Button, Checkbox } from "antd";
import "../LoginForm.css";

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <h2>Connectez-vous</h2>
            <Form name="basic">
                <Form.Item
                    label="Nom d'utilisateur"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Veuillez saisir votre nom d'utilisateur",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mot de passe"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Veuillez saisir votre mot de passe",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Se souvenir de moi</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Se connecter
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;

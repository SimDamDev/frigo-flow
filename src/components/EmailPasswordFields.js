import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalide").required("Email requis"),
    password: Yup.string()
        .min(8, "Mot de passe trop court")
        .required("Mot de passe requis"),
});

const EmailPasswordFields = ({ initialValues, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <>
                    <Form.Item
                        label="Adresse email"
                        name="email"
                        validateStatus={formik.errors.email ? "error" : ""}
                        help={formik.errors.email}
                    >
                        <Input name="email" placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        label="Mot de passe"
                        name="password"
                        validateStatus={formik.errors.password ? "error" : ""}
                        help={formik.errors.password}
                    >
                        <Input.Password
                            name="password"
                            placeholder="Mot de passe"
                        />
                    </Form.Item>
                </>
            )}
        </Formik>
    );
};

EmailPasswordFields.propTypes = {
    initialValues: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default EmailPasswordFields;

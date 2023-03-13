import React from "react";
import { Formik } from "formik";
import { Form, Input, Button } from "antd";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().nullable(),
    lastName: Yup.string().nullable(),
    birthdate: Yup.date().nullable(),
});

const FieldsStep2 = ({ handleNextClick, handleBackClick }) => {
    return (
        <>
            <h2>Inscription</h2>
            <Formik
                initialValues={{ firstName: "", lastName: "", birthdate: null }}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form name="basic" onFinish={formik.handleSubmit}>
                        <Form.Item
                            label="Prénom"
                            name="firstName"
                            validateStatus={
                                formik.errors.firstName ? "error" : ""
                            }
                            help={formik.errors.firstName}
                        >
                            <Input
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Nom de famille"
                            name="lastName"
                            validateStatus={
                                formik.errors.lastName ? "error" : ""
                            }
                            help={formik.errors.lastName}
                        >
                            <Input
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Date de naissance"
                            name="birthdate"
                            validateStatus={
                                formik.errors.birthdate ? "error" : ""
                            }
                            help={formik.errors.birthdate}
                        >
                            <Input
                                type="date"
                                name="birthdate"
                                value={formik.values.birthdate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>

                        <h4>
                            Si vous préférez fournir ces informations plus tard,
                            vous pouvez cliquer sur le bouton "Suivant" pour
                            terminer l'enregistrement.
                        </h4>

                        <Form.Item>
                            <Button
                                type="default"
                                onClick={() => handleBackClick(formik.values)}
                            >
                                Retour
                            </Button>
                            <Button
                                type="primary"
                                htmlType="default"
                                onClick={() => handleNextClick(formik.values)}
                            >
                                Suivant
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default FieldsStep2;

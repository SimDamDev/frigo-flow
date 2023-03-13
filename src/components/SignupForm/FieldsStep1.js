import React from "react";
import { Formik } from "formik";
import { Form, Input, Button } from "antd";
import * as Yup from "yup";


const FieldsStep1 = ({ handleNextClick, validationSchema }) => {
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form name="basic" onFinish={formik.handleSubmit}>
                        <Form.Item
                            label="Adresse email"
                            name="email"
                            validateStatus={formik.errors.email ? "error" : ""}
                            help={formik.errors.email}
                        >
                            <Input
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Mot de passe"
                            name="password"
                            validateStatus={
                                formik.errors.password ? "error" : ""
                            }
                            help={formik.errors.password}
                        >
                            <Input.Password
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="button"
                                disabled={!formik.dirty || !formik.isValid}
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

export default FieldsStep1;

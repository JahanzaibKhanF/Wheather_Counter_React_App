import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
import { useState } from "react";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const Registration = () => {
  // Form Vilidation with useformik
  const formInitailValues = {
    name: "",
    email: "",
    age: "",
    pass: "",
    cpass: ""
  };
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    values,
    errors
  } = useFormik({
    initialValues: formInitailValues,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      console.log(values); // log form data to console
      action.resetForm();

      setFeedback("We are coming soon- Wait Few Days");
    }
  });
  const [feedback, setFeedback] = useState("");

  return (
    <>
      <br />
      <br />
      <br />

      <Row>
        <Col sm={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <div className="Form mt-5 ">
            <h3 className="text-center">Registration</h3>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Text className="text-muted">
                      {errors.email && touched.email ? (
                        <span style={{ color: "red" }}>{errors.email}</span>
                      ) : null}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="Password"
                      placeholder="Password"
                      name="pass"
                      value={values.pass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Text className="text-muted">
                      {errors.pass && touched.pass ? (
                        <span style={{ color: "red" }}>{errors.pass}</span>
                      ) : null}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save Login" />
                  </Form.Group>
                  <Button variant="primary" type="submit" value="Submit">
                    Log In
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            {feedback && (
              <Alert className="text-white bg-success">{feedback}</Alert>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Registration;

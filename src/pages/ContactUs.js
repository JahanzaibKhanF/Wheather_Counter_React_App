import { Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
const ContactUs = () => {
  return (
    <>
      <br />

      <Row>
        <Col lg={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
          <div className="ContactUs mt-5">
            <h3>Contact Us</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Contact Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="form-control-lg"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Next
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ContactUs;

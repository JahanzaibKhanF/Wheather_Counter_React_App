import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../styles.css";

const Layout = () => {
  return (
    <>
      <Row>
        <Col>
          <Navbar expand="lg" className="bg-danger sticky-top" variant="dark">
            <Container>
              <Navbar.Brand>
                <h3>DataWatcher</h3>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="mynav" />
              <Navbar.Collapse id="mynav">
                <Nav className="me-auto fw-bold">
                  <LinkContainer to="/">
                    <Nav.Link>HOME</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/weather">
                    <Nav.Link>WEATHER</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/counter">
                    <Nav.Link>COUNTER</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/signup">
                    <Nav.Link>REGISTRATION</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contactus">
                    <Nav.Link>CONTACT US</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/aboutus">
                    <Nav.Link>ABOUT US</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Navbar.Text>
                  <Button href="/signup">Sign Up</Button>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Outlet />
    </>
  );
};
export default Layout;

import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Table } from "react-bootstrap";

export const AppNav = () => {
  return (
    // <>
    //   <Link to="/" children="Home" />
    //   <Link to="/users" children="Users" />
    //   <Link to="/clients" children="Cients" />
    // </>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Prueba Tecnica Norberto Lodela</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to="/clients" className={"nav-link"}>
              Clients
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

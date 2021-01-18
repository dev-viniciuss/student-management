import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiMessageSquareDetail } from 'react-icons/bi';


const Header: React.FC = () => {
  
  return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/" className="ml-4 mr-4 font-weight-bold">
          <BiMessageSquareDetail size={34} color="#fff"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/" className="mr-2 text-light font-weight-bold">
              Página Inicial
            </Nav.Link>
            
            <NavDropdown title="Cadastrar" id="collasible-nav-dropdown font-weight-bold" className="mr-2 NavDropdown-dark font-weight-bold" > 
              <NavDropdown.Item href="/RegisterStudent">Alunos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/RegisterCourse">Cursos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Listagem" id="collasible-nav-dropdown" className="font-weight-bold">
              <NavDropdown.Item href="/ShowStudent">Alunos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ShowCourse">Cursos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
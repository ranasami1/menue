import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import logo from '../assets/logo.png';
import "./Header.css"

import '../Header/Header.css';
function Header() {
  return (
      <Navbar bg="black" className='Navbar' data-bs-theme="warning">
        <Container>
        <Navbar.Brand href="/"><img src={logo} style={{maxWidth:"180px"}}></img></Navbar.Brand>
        <Nav className="ms-auto">
        <Nav.Link href="/" className="custom-link">Menue</Nav.Link>
        <Nav.Link href="#contact" className="custom-link">ContactUs</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;
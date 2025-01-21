import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import logo from '../assets/logo.png';
import "./Header.css"

import '../Header/Header.css';
function Header() {
  return (
    <>
      <Navbar className='Navbar' bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo} style={{maxHeight:"90px"}}></img></Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Menue</Nav.Link>
            <Nav.Link href="/aboutus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </>
  );
}

export default Header;
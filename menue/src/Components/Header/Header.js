import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

import '../Header/Header.css';
function Header() {
  return (
    <>
      <Navbar className='Navbar' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><h1>ROLANDS <span style={{color:"#F8AD42"}}>CAFFEE</span></h1></Navbar.Brand>
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
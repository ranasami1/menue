import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import logo from '../assets/logo.png';
import "./Header.css"
import '../Header/Header.css';
import i18next from 'i18next';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { Button } from 'react-bootstrap';
function Header() {
  const { t } = useContext(AppContext);
  return (
      <Navbar bg="black" className='Navbar' data-bs-theme="warning" >
        <Container >
        <Navbar.Brand href="/"><img src={logo} style={{maxWidth:"180px"}}></img></Navbar.Brand>
        <Nav className="my-auto mb-0">
        <Nav.Link href="/" className="custom-link">{t("Categories")}</Nav.Link>
        <Button variant="warning" onClick={()=>{i18next.changeLanguage("en");}}>en</Button>
        
        </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;
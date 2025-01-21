import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

export default function Footer() {
  return (
    <footer className ="d-flex align-items-center flex-column">
        <div className='container'>
        <h2>Contact Us</h2>

        <a href='https://x.com/RolllandsCoffe?fbclid=IwAR1SJrG0QjNi4SzkBblHTZv0cJs-ifBHA1g95og47IcwjE9EDWkY7DOC-24'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
        <a href='https://www.facebook.com/RolllandsCoffe'><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
        <a href='https://www.youtube.com/channel/UCRST_Si9jDyE-5WQ7_6HnkA'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
        
        </div>
    </footer>
  )
}

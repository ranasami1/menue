import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faXTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import './footer.css';

export default function Footer() {
  return (
    <footer>
        <div className='container' id="contact">
        <h4>Contact Us</h4>
        <div className='d-flex gap-4 align-items-center justify-content-center flex-wrap'>
        <a href='https://x.com/RolllandsCoffe?fbclid=IwAR1SJrG0QjNi4SzkBblHTZv0cJs-ifBHA1g95og47IcwjE9EDWkY7DOC-24'><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href='https://www.facebook.com/RolllandsCoffe'><FontAwesomeIcon icon={faFacebook} /></a>
        <a href='https://www.youtube.com/channel/UCRST_Si9jDyE-5WQ7_6HnkA'><FontAwesomeIcon icon={faYoutube} /></a>
        <a href='tel:+966590968866'>+966 59 096 8866</a>
        </div>
        </div>
    </footer>
  )
}

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
       <footer>

           <a href="https://github.com/rprice000" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>

          <a href="https://www.linkedin.com/in/reagan-price-967a25101/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>

          <a href="https://www.instagram.com" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>



       </footer> 
    )
}


export default Footer;
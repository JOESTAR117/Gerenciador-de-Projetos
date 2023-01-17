import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

import { Foot } from "./FooterStyled";

function Footer(){
    return(
        <Foot>
          <ul className='social_list'>
            <li>
                <a href="https://www.facebook.com/junior.rios.739326/" target= "_blank"><FaFacebook /></a>
                
            </li>
            <li>
                <a href="https://www.instagram.com/jackson_luis1/" target= "_blank"><FaInstagram /></a>
                
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jackson117/" target= "_blank"><FaLinkedin /></a>
                
            </li>
            <li>
                <a href="https://github.com/JOESTAR117" target= "_blank"><FaGithub/></a>
            </li>
            </ul>  
            <p className='copy_right'>
                <span>JOJO COIN</span> 
                &copy; 2023</p>
        </Foot>
    )
}

export default Footer;
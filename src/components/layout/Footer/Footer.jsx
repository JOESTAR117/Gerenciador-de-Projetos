import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

import { Foot } from "./FooterStyled";

function Footer(){
    return(
        <Foot>
          <ul className='social_list'>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
            <li>
                <FaGithub/>
            </li>
            </ul>  
            <p className='copy_right'>
                <span>JOJO COIN</span> 
                &copy; 2023</p>
        </Foot>
    )
}

export default Footer;
import '../footer/footer_index.css';
import React from 'react';
import { FaGithubSquare} from "react-icons/fa";
import {SiLeetcode} from 'react-icons/si';
import { BsLinkedin } from "react-icons/bs";
// import {Link} from 'react-router-dom'
const Footer =()=>{
const twittter = "https://github.com/Shailendra-Niranjan";
const linkedin = "https://www.linkedin.com/in/shailendra-niranjan-487925226/";
const leetcode = "https://leetcode.com/shailendraniranjan771/";



    return(
        <div className='footer_cnt'>
                <span className="footer_icons">
                <a href={twittter} rel="noreferrer" target= "_blank"><FaGithubSquare className="icon"/></a>
                <a href={leetcode} rel="noreferrer" target='_blank' ><SiLeetcode className="icon"/> </a>
                <a href={linkedin}  rel="noreferrer" target='_blank' ><BsLinkedin className="icon"/></a>

                </span>
        </div>
    );
}
export default Footer;
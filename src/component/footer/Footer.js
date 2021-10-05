import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer" >

            <div>

                <p>&copy; 2021 Farshid Ahsan</p>

            </div>

            <div className="list">
                <ul>
                    <li>HOME</li>
                    <li>FEATURES</li>
                    <li>ABOUT US</li>
                </ul>
            </div>

            <div className="contact" >
                <ul>
                    <li>Contact Info:</li>
                    <li>Phone:01578522</li>
                    <li>Email:xyz@gmail.com</li>
                    <li>Fax:185485158</li>
                </ul>
            </div>


        </div>
    );
};

export default Footer;
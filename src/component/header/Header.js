import React from 'react';
import Container from '../../Container/Container';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">


            <nav>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to="/services">Services</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to="/features">Features</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to="/blog">Blog</NavLink>

                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
                    to="/about">About</NavLink>



            </nav>


            <div>
                <Container></Container>
            </div>



        </div>
    );
};

export default Header;
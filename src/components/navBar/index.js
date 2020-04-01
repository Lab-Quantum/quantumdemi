import React from 'react'
import './navBar.css'

import Avatar from '@material-ui/core/Avatar';

import Logo from '../../assets/logo.png';

const NavBar = () => {
    return(
        <div className="navBar">
            <div className="container">
                <div className="logoContainer">
                    <img className="logo" src={Logo} alt="Logo" />
                </div>
                <div className="menuContainer"></div>
                <div className="userContainer">
                    <Avatar alt="Cristian" src="/broken-image.jpg" />
                </div>
            </div>
        </div>
    )
};

export default NavBar;
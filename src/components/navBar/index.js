import React, { useState, useEffect } from 'react';
import './navBar.css'
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../assets/logo.png';
import axios from 'axios';

const NavBar = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://covid-19-data.p.rapidapi.com/totals', {
            headers: {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "ec761fd2cbmsh8254ec0c0c2f43ap123c7cjsnac0b6e924a3d"
            },
        })
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log(error)  
        })    
    });
    
    return(
        <div className="navBar">
            <div className="container">
                <div className="logoContainer">
                    <img className="logo" src={Logo} alt="Logo" />
                </div>
                <div className="menuContainer">Casos confirmados: {data.confirmed} </div>
                <div className="userContainer">
                    <Avatar style={{width: '32px', height: '32px', fontSize: '14px'}} alt="Cristian" src="/broken-image.jpg" />
                </div>
            </div>
        </div>
    )
};

// https://stackoverflow.com/questions/58347348/axios-get-request-is-in-infinite-loop

export default NavBar;
import React, { useState, useEffect } from 'react';
import './navBar.css'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/logo.png';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

const NavBar = () => {

  const [data, setData] = useState([]);  

  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: -1,
        left: -1,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

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
  }, []);
    
  return(
    <div className="navBar">
      <div className="container">
          <div className="logoContainer">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <div className="menuContainer">Casos confirmados: 9056 </div>
          <div className="userContainer">
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar style={{width: '32px', height: '32px', fontSize: '14px'}} alt="Cristian" src="/broken-image.jpg" />
            </StyledBadge>
          </div>
      </div>
    </div>
  )
};

// https://stackoverflow.com/questions/58347348/axios-get-request-is-in-infinite-loop

export default NavBar;
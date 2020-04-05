import React, { useState, useEffect } from 'react';
import './navBar.css'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/logo.png';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-router-dom';

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
    axios.get('https://pomber.github.io/covid19/timeseries.json', {
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
            <Link className="menuIten" to="/">
              <img className="logo" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="menuContainer">Casos confirmados: {data['Brazil'] ? data['Brazil'][data['Brazil'].length - 1].confirmed : 'N/A' }
          </div>
          <div className="userContainer">
            <Link className="menuIten" to="/mapa">
              <IconButton>
                <MapIcon className="buttonMap"/>
              </IconButton>
            </Link>
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
}

export default NavBar;
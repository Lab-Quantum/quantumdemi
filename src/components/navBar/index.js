import React, { useState, useEffect } from 'react';
import './navBar.css'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/logo.png';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Cookies from 'universal-cookie';

import { Link } from 'react-router-dom';

const NavBar = () => {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);  

  const cookies = new Cookies();
  console.log(cookies.get('nome'));
  
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleChnage = (event) => {
    // setNome(event.target.value)
    cookies.set('nome', event.target.value, { path: '/' });
  };


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
            <Link className="menuIten" style={{marginRight: '-20px'}} to="/">
              <IconButton>
                <HomeRoundedIcon className="buttonMap"/>
              </IconButton>
            </Link>
            <Link className="menuIten" style={{marginRight: '20px'}} to="/mapa">
              <IconButton>
                <MapRoundedIcon className="buttonMap"/>
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
              <Avatar 
                onClick={handleClickOpen} 
                style={{width: '32px', height: '32px', fontSize: '14px', cursor: 'pointer'}} 
                alt={cookies.get('nome')} 
                src="/broken-image.jpg" />
            </StyledBadge>
          </div>
      </div>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{minWidth: '700px'}} id="form-dialog-title">Digite seu nome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            onChange={handleChnage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NavBar;
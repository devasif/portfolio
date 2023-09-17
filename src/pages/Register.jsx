import AccountCircleIcon from '@mui/icons-material/AccountCircle';import { Alert, Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { LockOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import bg1 from "../images/bg.jpg"
import bg2 from "../images/bgDark.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const theme = createTheme();



const Heading = styled.h1 `
color:${({theme})=>theme.textMe};
position: relative;
font-size: 40px;

`
const SubHeading = styled.h3 `
color:${({theme})=>theme.textMe};
font-size: 28px;
margin-bottom: 13px;
font-weight:500;
font-family: 'Open Sans', sans-serif;
`
const SubHeading2 = styled.h3 `
color:${({theme})=>theme.textMe};
font-size: 22px;
margin-bottom: 13px;
font-weight:500;
font-family: 'Open Sans', sans-serif;
`
const SubHeading3 = styled.h3 `
color:${({theme})=>theme.textMe};
font-size: 26px;
margin-bottom:24px;
font-weight:600;
font-family: 'Open Sans', sans-serif;
`
const SubHeading4 = styled.h6 `
color:${({theme})=>theme.textMe};
font-size: 18px;
margin-bottom:24px;
font-weight:600;
font-family: 'Open Sans', sans-serif;
`
const ContactSection = styled.div `
background:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-radius:25px;
padding-bottom: 45px;

`

export const Register = ({darkMode, SetDarkMode}) => {
  const [open, setOpen] = useState(false);

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const [input,setInput] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange = (e)=>{
      setInput(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8800/register",input)
      console.log(res)

    } catch(err){
     console.log(err)
    }
    setOpen(true);
  };
  const backgroundImage = darkMode ? bg2 : bg1;

  const [bg, setBg] = useState('');
  console.log(bg)

  // const handleChange = (e)=>{
  //     const {value} = e.target;
  //     setBg(value)
  // };
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, [])

  return (
    <div className='container'>
    <div className="row">
      <div className="about_bg m-v" style={{ 
      backgroundImage:  `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:'fixed',
        backgroundPosition: 'center',
        width: '100%',
       
        
        
    }}>
      
    
        <ContactSection className="col px-5 ">
        <div className="about-me py-5">
        <div className="about-title">
        {/* resume page title  */}
            <Heading className='heading-register'>Register  </Heading>
        </div>
    
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="  User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}

            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4 }}
            >
              Sign Up
            </Button>
            <Grid container>
              
              <Grid item>
                <p>Do You have an account ?  <Link to="/login" variant="body2" >Sing In </Link></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Account Created Succesfully
        </Alert>
      </Snackbar>
       
      </Container> 

  
    </div>
        </ContactSection>
         {/* copyright */}
         <div className="row">
            <div className="col copyright text-center pt-4">
                <p>

© 2023 All Rights Reserved by <Link to="/">Developer Asif</Link>
</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}













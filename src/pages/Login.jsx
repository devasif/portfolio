import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg1 from "../images/bg.jpg"
import bg2 from "../images/bgDark.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useState } from 'react';




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


export const Login = ({darkMode, SetDarkMode}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    if(data.get.length  === 0) {
      alert("please provide an email");
    }
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
            <Heading className='heading-login'>Login  </Heading>
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
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember"  />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <p className='p'>Don't have an account <Link to="/register" >Sing Up</Link></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
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

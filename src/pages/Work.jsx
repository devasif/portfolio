import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg1 from "../images/bg.jpg"
import bg2 from "../images/bgDark.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'








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
const WorkSection = styled.div `
background:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-radius:25px;
padding-bottom: 45px;

`


export const Work = ({darkMode, SetDarkMode}) => {

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
      
    
        <WorkSection className="col px-5 ">
        <div className="about-me py-5">
        <div className="about-title">
        {/* resume page title  */}
            <Heading className='heading-work-page'>Work </Heading>
        </div>
    
 

  
    </div>
        </WorkSection>
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

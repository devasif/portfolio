import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import styled, { ThemeContext } from 'styled-components'
import bg1 from "../images/bg.jpg"
import bg2 from "../images/bgDark.jpg"
import seoIcon from "../images/seo.png"


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
font-weight:600;
font-family: 'Open Sans', sans-serif;
`
const AboutMe = styled.div `
background:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-radius:25px;
padding-bottom: 45px;

`

const Info = styled.h6 `
color:${({theme})=>theme.textMe};
font-size: 16px;
padding: 0;
font-weight: 500;
line-height: 0;

`
const IconInfo = styled.span `
display: inline-block;
height: 50px;
background: ${({theme})=>theme.iconBg};
width: 50px;
box-shadow: 3px, 4px, 10px ,rgba(0,0,0,.5);
line-height:53px;
text-align: center;
font-size: 25px;
border-radius: 8px;
box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.08);
color: #e93b81;

`

export const About = ({darkMode,setDarkMode}) => {
    const backgroundImage = darkMode ? bg2 : bg1;

  
  return (
    <>
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
      
    
        <AboutMe className="col px-5 ">
        <div className="about-me py-5">
        <div className="about-title">
        {/* about page title  */}
            <Heading className='heading'>About Me</Heading>
        </div>
    
    <div className="row py-5">
        <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="profile-pic">
                <img src="" alt="img" />
            </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8">
                {/* who am i content   */}
            <div className="about-data">
                <div className="about-details">
                    <SubHeading> Who am i? </SubHeading>
                    <p> I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. <br /> 
                    <br />

My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies. </p>
                </div>
                {/* personal */}
                <div className="personal-info">
                <SubHeading>  Personal Info  </SubHeading>
                   <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-info mb-3">
                        <div className="info-icon">
                            <IconInfo><i class="fa-solid fa-phone"></i></IconInfo>
                        </div>
                        <div className="info-data">
                            <p>Phone</p>
                            <Info>+8801645289465</Info>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-info mb-3">
                        <div className="info-icon">
                            <IconInfo><i class="fa-solid fa-location-dot"></i></IconInfo>
                        </div>
                        <div className="info-data">
                            <p>Location</p>
                            <Info>BanglaDesh</Info>
                        </div>
                    </div>
                    </div>
                     <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-info mb-3">
                        <div className="info-icon">
                            <IconInfo><i className="fa-solid fa-envelope-open-text"></i></IconInfo>
                        </div>
                        <div className="info-data">
                            <p>Email</p>
                            <Info>info@developerasif.me</Info>
                        </div>
                    </div>
                    </div>
                     <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-info mb-3">
                        <div className="info-icon">
                            <IconInfo><i className="fa-solid fa-calendar-days"></i></IconInfo>
                        </div>
                        <div className="info-data">
                            <p>Birthday</p>
                            <Info>December 31, 2002</Info>
                        </div>
                    </div>
                    </div>

                   </div>
                  

                </div>
            </div>
        </div>
    </div>

    {/* What i Do */}
    <div className="what-i-do">
    <SubHeading> What I do! </SubHeading>
        <div className="row py-3">
            <div className="col-xl-4 col-md-6 mb-3">
                <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-icon">
                        <span><i className="fa-brands fa-wordpress"></i></span>
                    </div>
                    <div className="work-details">
                        <SubHeading2> Wordpress </SubHeading2>
                        <p>
I can Design/develop any website using Wordpress And Elementor Page Builder 
</p>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-md-6 mb-3">
                <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-icon">
                        <span><i className="fa-brands fa-react"></i></span>
                    </div>
                    <div className="work-details">
                        <SubHeading2> React.Js </SubHeading2>
                        <p>
I can create/develop any website using React.Js for frontend. I’m providing my best service.
</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-3">
                <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-icon">
                        <span><i className="fa-brands fa-node"></i></span>
                    </div>
                    <div className="work-details">
                        <SubHeading2> Node.Js </SubHeading2>
                        <p>

                       I can create/develop website using NodeJs for backend. I’m providing my best service.
</p>
                    </div>
                </div>
            </div>

      <div className="col-xl-4 col-md-6 mb-3">
                <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-icon img-w">
                        <img src={seoIcon} alt="img" />
                    </div>
                    <div className="work-details">
                        <SubHeading2> Seo </SubHeading2>
                        <p>

                      I'm On Page Seo Expert. Website Audit And fixing all Error and optimize website speed.
</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-3">
                <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-icon">
                        <span><i className="fa-brands fa-android"></i></span>
                    </div>
                    <div className="work-details">
                        <SubHeading2>App Development </SubHeading2>
                        <p>

                       I can Design  An Android App in Android Studio Using XML And java, Create Best Font-End.
</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-3">
                <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-icon">
                        <span><i className="fa-solid fa-code"></i></span>
                    </div>
                    <div className="work-details">
                        <SubHeading2>Full Web Development </SubHeading2>
                        <p>

                   I Can Design And Develop Web Application Using ReactJs, NodeJs, Express js and  MongoDB.
</p>
                    </div>
                </div>
            </div>

        </div>
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
        </AboutMe>
      </div>
    </div>
    </div>
    </>
  )
}

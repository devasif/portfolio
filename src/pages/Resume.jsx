import ProgressBar from '@ramonak/react-progress-bar';
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
const AboutMe = styled.div `
background:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-radius:25px;
padding-bottom: 45px;

`


export const Resume = ({darkMode, SetDarkMode}) => {

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
      
    
        <AboutMe className="col px-5 ">
        <div className="about-me py-5">
        <div className="about-title">
        {/* resume page title  */}
            <Heading className='heading'>Resume </Heading>
        </div>
    
 

    {/* What i Do */}
    <div className="what-i-do">
        <div className="row py-3">
            <div className="col-xl-4 col-md-6 mb-3" data-aos="flip-left">
                <div className="resume">
                   <span><i class="fa-solid fa-graduation-cap"></i></span> <SubHeading3>Education</SubHeading3>
                </div>
               <div>
               <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    
                    <div className="work-details">
                        <div className="resume-tt">
                            <h4> 2019-2023 </h4>
                        </div>
                        <SubHeading2> BBS  </SubHeading2>
                        <p>
                        Sherpur Govt College, BD
</p>
                    </div>
                </div>
               </div>
            </div>

            <div className="col-xl-4 col-md-6 mb-3 " data-aos="flip-up" >
                <div className="resume">
                   <span><i class="fa-solid fa-toolbox"></i></span> <SubHeading3>Experience</SubHeading3>
                </div>
               <div>
               <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-details">
                        <div className="resume-tt">
                            <h4> 2021-2023 </h4>
                        </div>
                        <SubHeading2>  Cr. Web Developer   </SubHeading2>
                        <p>
                      Online Creative
</p>
                    </div>
                </div>
               </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-3" data-aos="flip-right">
                <div className="resume">
                   <span><i class="fa-solid fa-award"></i></span> <SubHeading3>Awards</SubHeading3>
                </div>
               <div>
               <div className={darkMode ? "active-class d-flex" : " d-flex what-work"}>
                    <div className="work-details">
                        <div className="resume-tt">
                            <h4> 2019-2020 </h4>
                        </div>
                        <SubHeading2>Jr. Web Developer   </SubHeading2>
                        <p>
                        Creative Gigs.
</p>
                    </div>
                </div>
               </div>
            </div>

         

        </div>


        {/* skills progress bar */}
        <div className="row py-5">
            <div className="col-xl-6 col-md-6 col-lg-6">
                <div className="skills">
                <SubHeading3> Working Skills </SubHeading3>
                    <div className="progress-bars py-2">
                        <div className="label">
                        <SubHeading4>Font End Development</SubHeading4>
                        </div>
                        <div className="progress-bar">
                        <ProgressBar  height="5px" completed={95} />
                        </div>
                    </div>
                    <div className="progress-bars py-2">
                        <div className="label">
                        <SubHeading4>Back End Development</SubHeading4>
                        </div>
                        <div className="progress-bar">
                        <ProgressBar 
                          height="5px"
    bgColor="#611BDC" completed={65} />
                        </div>
                    </div>
                    <div className="progress-bars py-2">
                        <div className="label">
                        <SubHeading4>Wordpress & Elemnetor </SubHeading4>
                        </div>
                        <div className="progress-bar">
                        <ProgressBar 
                          height="5px"
    bgColor="#16E48B" completed={90} />
                        </div>
                    </div>
                    <div className="progress-bars py-2">
                        <div className="label">
                        <SubHeading4> On Page Seo </SubHeading4>
                        </div>
                        <div className="progress-bar">
                        <ProgressBar 
                          height="5px"
    bgColor="#ee1243" completed={75} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="col-xl-6 col-md-6 col-lg-6 py-5">
            <SubHeading3> Knowledges  </SubHeading3>
                <div className="knowledge ">
                    <button className="resume-button">Html5</button>
                    <button className="resume-button"> CSS3</button>
                    <button className="resume-button">javScript</button>
                        <button className="resume-button">ReactJs</button>
                        <button className="resume-button">jquery</button>
                        <button className="resume-button">ExpressJs</button>
                        <button className="resume-button">NodeJs</button>
                        <button className="resume-button">MongoDb</button>
                        <button className="resume-button">Sass</button>
                        <button className="resume-button">Tailwind Css</button>
                        <button className="resume-button">Bootstrap </button>
                        <button className="resume-button">WordPress</button>
                        <button className="resume-button">WooCommerce </button>
                        <button className="resume-button">Elementor </button>
                        <button className="resume-button">WebSite Optimization </button>
                        <button className="resume-button"> On Page Seo  </button>
                        <button className="resume-button">Android App Development</button>
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
  )
}

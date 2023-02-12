import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import styled from 'styled-components'
import bg1 from "../images/bg.jpg"
import bg2 from "../images/bgDark.jpg"

const Heading = styled.h1 `
color:${({theme})=>theme.text};
`

export const Home = ({darkMode,setDarkMode}) => {

  const backgroundImage = darkMode ? bg2 : bg1;
  return (
    <> 
    <div className='container'>
    <div className="row">
      <div className="global_bg" style={{ 
      backgroundImage:  `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment:'fixed',
        width: '100%',
        height:'100vh',
        
        
    }}>
      
      <div className="my-info"> 
         <div className="name">
          <Heading>Asif Mia</Heading> 
           </div>   
            <div className="work-title">
          <Heading>
          <TypeAnimation
    sequence={['Web Developer', 1000, 'Mobile App Developer', 1000, 'Wordpress Developer', 1000]}
                   //  Replacing previous Text
    style={{ fontSize: '2em' }}
    wrapper="h2"
    repeat={Infinity}
  />
          </Heading>
      
              </div> 
            <div className="social-info"></div>
            <div className="cv-button"></div>
            </div>  
      </div>
    </div>
    </div>
    </>
  )
}

import React from 'react'
import styled from 'styled-components'
import bg1 from "../images/bg.jpg"
import bg2 from "../images/bgDark.jpg"

const Heading = styled.h1 `
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
`

export const Home = ({darkMode,setDarkMode}) => {

  const backgroundImage = darkMode ? bg2 : bg1;
  return (
    <>
    <div className='container'>
    <div className="global_bg" style={{ 
      backgroundImage:  `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        padding:"400px",
        
    }}>
      <Heading>hello world</Heading>
    </div>
    </div>
    </>
  )
}

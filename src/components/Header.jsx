import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import styled from 'styled-components';
import logo from "../images/developerasif.png"
import mobileLogo from "../images/mobileLogo.png"



const HeaderArea = styled.div    `
// padding: 10px 0;
// background-color:${({theme})=>theme.bgLighter};
// color:${({theme})=>theme.text};
// border-bottom: 1px solid rgb(58 64 71 / 8%);
`

const ModeButton = styled.button `
background:${({theme})=>theme.mBtn};
color:${({theme})=>theme.mBtnText};
border-radius:4px;
border: 1px solid transparent;
margin-top: 4px;
margin-left:15px;
padding: 8px;
border-radius: 50%;
margin-right: 17px;
width: 40px;
height: 40px;
font-size: 21px;
line-height: 24px;

`
const DLink = styled.a `
color:${({theme})=>theme.bgButton};
text-decoration:none;
text-transform:capitalize;
font-weight:bold;
`
const Links = styled.li `
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.bgText};
display: inline-block;
justify-content: center;
font-size: 18px;
font-weight: 400;
border-radius: 5px;
float: left;
margin: 5px 9px;
font-family: 'Rubik', sans-serif;

`

const LinksM = styled.div `
color:${({theme})=>theme.bgText};
display: block;
justify-content: center;
font-size: 18px;
font-weight: 400;
border-radius: 5px;
float: left;
margin: 5px 9px;
font-family: 'Rubik', sans-serif;
width:100%;
`
const MobileHeader= styled.div`
padding: 10px 15px;
 background-color:${({theme})=>theme.bgLighter};
 color:${({theme})=>theme.text};
 border-bottom: 1px solid rgb(58 64 71 / 8%);
 position: relative;
  z-index: 1111;
  
  `
const ModeButtonTwo = styled.button `
background:${({theme})=>theme.mBtn};
color:${({theme})=>theme.mBtnText};
border-radius:4px;
border: 1px solid transparent;
margin-top: 0px;
padding: 8px;
border-radius: 50%;
margin-right: 17px;
width: 40px;
height: 40px;
font-size: 21px;
line-height: 24px;

`
const MobileMenu = styled.div `
	position: absolute;
	top: 99%;
	left: 0;
	width: 100%;
	padding: 0;
  background:${({theme})=>theme.mMenu};

`
export const Header = ({darkMode,setDarkMode}) => {

  const [toggle,setToggle] = useState(false);



  return (
    <>
      <HeaderArea className="header_section">
        <div className="container g-0">
        <div className="navs">
        <div className="row ">
            <div className="col-xl-3 col-lg-3">
              <div className="logo d-flex justify-content-center align-items-center">
                <Link to="/">
                  <img src={mobileLogo} alt="logo" />
                 
                </Link>
               
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
            <nav>
          <ul>
            <Links><NavLink exact="true" activeclassname="active"  className="link" to="/"> <i className="fa-solid fa-house"></i> Home</NavLink></Links>
            <Links><NavLink activeclassname="active"  className="link" to="/about"> <i className="fa-sharp fa-solid fa-user"></i> About </NavLink></Links>
            <Links><NavLink activeclassname="active"  className="link"  to="/portfolio"> <i className="fa-solid fa-file-lines"></i> Resume</NavLink></Links>
            <Links><NavLink activeclassname="active"  className="link" to="/works"> <i className="fa-solid fa-briefcase"></i> Works</NavLink></Links>
            <Links><NavLink activeclassname="active"  className="link" to="/blog"> <i className="fa-brands fa-blogger"></i> Blog</NavLink></Links>
            <Links><NavLink activeclassname="active"  className="link"  to="/contact"> <i className="fa-solid fa-address-book"></i> Contact</NavLink></Links>
            <Links><NavLink activeclassname="active"  className="link" to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</NavLink></Links>
            <li><div className="mode">
                <ModeButton className="h-btn" onClick={()=>setDarkMode(!darkMode)}>
                { darkMode ? <i className="fa-solid fa-sun"></i>  : <i className="fa-solid fa-moon"></i>}
                </ModeButton>
                  
              </div></li>
          </ul>
        </nav>
            </div>
           
          </div>
        </div>
       
        </div>
      </HeaderArea>

      <MobileHeader >
        <div className="container g-0">
          <div className="row">
            <div className="col">
            <div className="mobile-menu d-flex">
          <div className="m-logo w-50">
            <Link to="/"><img src={mobileLogo} alt='logo'></img></Link>
          </div>
          <div className="m-toogle-area">
            <div className="m-mode">
            <ModeButtonTwo className="m-btn" onClick={()=>setDarkMode(!darkMode)}>
                  { darkMode ? <i className="fa-solid fa-sun"></i>  : <i className="fa-solid fa-moon"></i>}
                </ModeButtonTwo>
            </div>
            <div className="m-toggle">
              <button className='toggle-btn' onClick={(()=>setToggle(!toggle))}>{ toggle ? <i className="fa-sharp fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>}</button>
            
              { toggle && <>
                <MobileMenu className="m-menu">
                <ul>
                <LinksM><NavLink exact="true" activeclassname="activeme"  className="links" to="/"> <i className="fa-solid fa-house"></i> Home</NavLink></LinksM>
            <LinksM><NavLink activeclassname="activeme"  className="links" to="/service"> <i className="fa-sharp fa-solid fa-user"></i> About </NavLink></LinksM>
            <LinksM><NavLink activeclassname="activeme"  className="links"  to="/portfolio"> <i className="fa-solid fa-file-lines"></i> Resume</NavLink></LinksM>
            <LinksM><NavLink activeclassname="activeme"  className="links" to="/works"> <i className="fa-solid fa-briefcase"></i> Works</NavLink></LinksM>
            <LinksM><NavLink activeclassname="activeme"  className="links" to="/blog"> <i className="fa-brands fa-blogger"></i> Blog</NavLink></LinksM>
            <LinksM><NavLink activeclassname="activeme"  className="links"  to="/contact"> <i className="fa-solid fa-address-book"></i> Contact</NavLink></LinksM>
            <LinksM><NavLink activeclassname="activeme"  className="links" to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</NavLink></LinksM>
                </ul>
              </MobileMenu>
              </>}
            </div>
           
          </div>
        </div>
            </div>
          </div>
        </div>
      </MobileHeader>
    </>
  )
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import styled from 'styled-components';
import logo from "../images/developerasif.png"



const HeaderArea = styled.div    `
padding: 10px 0;
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-bottom: 1px solid rgb(58 64 71 / 8%);
`

const ModeButton = styled.button `
color:${({theme})=>theme.bgButton};
min-hight:26px;
min-weight:26px;
border-radius:4px;
border: 1px solid transparent;
background: transparent;
transform: rotate(323deg); 
margin-top: 6px; 

`
const DLink = styled.a `
color:${({theme})=>theme.bgButton};
text-decoration:none;
text-transform:capitalize;
font-weight:bold;
`


export const Header = ({darkMode,setDarkMode}) => {

  return (
    <>
      <HeaderArea className="header_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="logo d-flex justify-content-center align-items-center">
                <Link to="/">
                  <img src={logo} alt="logo" />
                 
                </Link>
                <DLink  href='/'>developer <br />asif</DLink>
              </div>
            </div>
            <div className="col-xl-6">
            <nav>
          <ul>
            <li><NavLink activeClassName="actived" className="link" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="actived"  className="link" to="/service">Service</NavLink></li>
            <li><NavLink activeClassName="actived"  className="link"  to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink activeClassName="actived"  className="link" to="/blog">Blog</NavLink></li>
            <li><NavLink activeClassName="actived"  className="link"  to="/contact">Contact</NavLink></li>
            <li><NavLink activeClassName="actived"  className="link" to="/login">Login</NavLink></li>
          </ul>
        </nav>
            </div>
            <div className="col-xl-3">
              <div className="mode">
                <ModeButton className="" onClick={()=>setDarkMode(!darkMode)}>
                  { darkMode ? <WbSunnyIcon/>  : <NightlightRoundIcon/>}
                </ModeButton>
              </div>
            </div>
          </div>
        </div>
      </HeaderArea>
    </>
  )
}

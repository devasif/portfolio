import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1 `
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
`

export const Home = () => {
  return (
    <div className=' py-5 d-flex justify-content-center align-content-center '>
        <Heading> This website working Right now </Heading>
        <p className="text-success"> developer by asif</p>
    </div>
  )
}

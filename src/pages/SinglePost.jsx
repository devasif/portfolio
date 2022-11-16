import React, { useEffect, useState } from 'react'
import edit from "../images/edit.png"
import deleted from "../images/delete.png"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Menu } from '../components/Menu'
import { LoadPost } from '../components/Loading/LoadPost'


const Singled = styled.div `
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};`

const Heading = styled.h1 `
color:${({theme})=> theme.heading};
`
const Desk = styled.p `
color:${({theme})=> theme.desk};
`

export const SinglePost = () => {
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[]);
    
  return (
    <>
    <Singled className="single py-3">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 pt-2">
                    {
                        loading ?  <LoadPost/>
                        : 
                        <>
                               <div className="content">
                        <img src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg" alt="img" />
                    </div>
                   <div className="user">
                   <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="" />
                   <div className="info">
                       
                        <span>john</span>
                        <p>posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`write?edit=2`}>
                        <img src={edit} alt="edit post" />
                        </Link>
                        <Link to={`write?edit=2`}>
                        <img src={deleted} alt="delete post" />
                        </Link>
                    </div>
                   </div>
                   <div className="description">
                    <Heading>Lorem ipsum dolor sit amet.</Heading>
                    <Desk>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam tenetur obcaecati unde quidem distinctio inventore ab assumenda repellendus! Itaque.</Desk>
                    <br />
                    <Desk>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ut laboriosam aliquam, omnis, magnam dolores inventore ipsa beatae temporibus, veniam sequi. Qui eius fugit totam amet neque quaerat, eaque facere natus mollitia architecto commodi quibusdam, corrupti enim, sapiente nesciunt!</Desk>
                   </div>
                        </>
                    }
                </div>
                <div className="col-xl-4">
                    <Menu/>
                </div>
            </div>
        </div>
    </Singled>
    </>
  )
}

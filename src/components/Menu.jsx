import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoadRelatedPost } from './Loading/LoadRelatedPost'

const posts = [
    {
      id:1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desk:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem soluta quaerat mollitia aperiam consequuntur. Reprehenderit, qui voluptatum neque provident nemo ullam, quam odit officiis accusantium, dolorem facere. In consequuntur dolore et a molestiae animi, facilis deserunt. Facere, sit libero.",
      img:"https://blog.sellfy.com/wp-content/uploads/2019/09/instagram-post-ideas-1200x600.png"
    },
    {
      id:2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desk:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem soluta quaerat mollitia aperiam consequuntur. Reprehenderit, qui voluptatum neque provident nemo ullam, quam odit officiis accusantium, dolorem facere. In consequuntur dolore et a molestiae animi, facilis deserunt. Facere, sit libero.",
      img:"https://play-lh.googleusercontent.com/FCzgw2YD80puDhwEAOsjYCZcbetxOu5CRx7VzEVJ0z1C_FjyHqOefGqkrijyLD_cHbx1"
    },
    {
      id:3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desk:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem soluta quaerat mollitia aperiam consequuntur. Reprehenderit, qui voluptatum neque provident nemo ullam, quam odit officiis accusantium, dolorem facere. In consequuntur dolore et a molestiae animi, facilis deserunt. Facere, sit libero.",
      img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg"
    },
    {
      id:4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desk:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem soluta quaerat mollitia aperiam consequuntur. Reprehenderit, qui voluptatum neque provident nemo ullam, quam odit officiis accusantium, dolorem facere. In consequuntur dolore et a molestiae animi, facilis deserunt. Facere, sit libero.",
      img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg"
    },
  ]

const Heading = styled.h1 `
color:${({theme})=> theme.heading};
font-size:30px;
`
const PostBox = styled.div `
box-shadow: 3px 4px 10px  rgb(58 64 41 / 45%);
margin-bottom:20px;
padding: 15px;
border-radius:8px;
`

export const Menu = () => {
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[]);
   
  return (
    <>
    <div >
       <Heading>Other Posts</Heading>
      
      {
        loading ? <LoadRelatedPost/>:  <div className="menu">
        
        {posts.map((post)=> 
            <PostBox className="post" key={post.id}>
              <div className="menu-img">
                <img src={post.img} alt="img" />
              </div>
              <div className="contents">
                <Link className='link' to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
      
                </Link>
                <Link className="btn btn-outline-primary">
                  Road More....
                </Link>
              </div>
            </PostBox>
            )}
        
    
   </div>
      }
    </div>
    </>
  )
}

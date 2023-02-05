import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../components/Loading/Loading';

const posts = [
  {
    id:1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desk:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem soluta quaerat mollitia aperiam consequuntur. Reprehenderit, qui voluptatum neque provident nemo ullam, quam odit officiis accusantium, dolorem facere. In consequuntur dolore et a molestiae animi, facilis deserunt. Facere, sit libero.",
    img:"https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png"
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
    img:"https://blog.sellfy.com/wp-content/uploads/2019/09/instagram-post-ideas-1200x600.png"
  },
  {
    id:4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desk:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem soluta quaerat mollitia aperiam consequuntur. Reprehenderit, qui voluptatum neque provident nemo ullam, quam odit officiis accusantium, dolorem facere. In consequuntur dolore et a molestiae animi, facilis deserunt. Facere, sit libero.",
    img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg"
  },
]


const BlogPostSection = styled.div `
background-color:${({theme})=>theme.bgLighters};
color:${({theme})=>theme.text};

`
const PostStyle = styled.div `
background-color:${({theme})=>theme.bgLighters};
color:${({theme})=>theme.text};

`

const PostBox = styled.div `
box-shadow: 3px 4px 10px  rgb(58 64 41 / 8%);
margin-bottom:20px;
padding: 15px;
border-radius:8px;
`
const Button = styled.button `
background:${({theme})=>theme.bgSpecial};
color:${({theme})=>theme.my};

`
export const Blog = () => {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },3000)
  },[]);
  return (
    <BlogPostSection className='blog_post'>

    <div className="container">
      <div className="row">
        <div className="col-xl-8">
       {
        loading ?  <Loading/> 
        
        :
        <PostStyle className="posts">
        <div className="post-area">
          {posts.map((post)=> 
          <PostBox className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
    
              </Link>
              <p>{post.desk}</p>
              <Button className="btn">
                Road More....
              </Button> 
            </div>
          </PostBox>
          )}
        </div>
      </PostStyle>
       }
        </div>
        <div className="col-xl-4"></div>
      </div>
    </div>

    </BlogPostSection>
  )
}

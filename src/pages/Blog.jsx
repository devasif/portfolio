import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../components/Loading/Loading';
import axios from 'axios';
import bg1 from "../images/bg.jpg"
import bg2 from "../images/bgDark.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const BlogPostSection = styled.div `
background-color:${({theme})=>theme.bgLighters};
color:${({theme})=>theme.text};

`
const PostStyle = styled.div `
background-color:${({theme})=>theme.bgLighters};
color:${({theme})=>theme.text};

`

const Heading = styled.h1 `
color:${({theme})=>theme.textMe};
position: relative;
font-size: 40px;

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
const BlogSection = styled.div `
background:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
border-radius:25px;
padding-bottom: 45px;

`

export const Blog = ({darkMode, SetDarkMode}) => {
  const [loading,setLoading] = useState(false);
  const backgroundImage = darkMode ? bg2 : bg1;
  console.log(backgroundImage)


  const [posts,setPosts] = useState([]);

  useEffect(()=>{
   
    const FetchPost = async()=>{
      const res =  await axios.get(`http://localhost:5000/api/posts`);
      setPosts(res.data)
    }
    
  FetchPost();
  

  },[])

  
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },3000)
  },[]);


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
    
  
      <BlogSection className="col px-5 ">
      <div className="about-me py-5">
      <div className="about-title">
      {/* resume page title  */}
          <Heading className='heading-blog'>Blog  </Heading>
      </div>
  



  </div>
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
          <PostBox className="post" key={post._id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post._id}`}>
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
      </BlogSection>
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
  </div>
)
}

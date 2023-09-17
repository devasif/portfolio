import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  json,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { SinglePost } from "./pages/SinglePost";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./style.scss";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./utils/Theme";
import { NotfoundPage } from "./pages/NotfoundPage";
import { Single } from "./pages/SinglePost";
import { Write } from "./pages/Write";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Work } from "./pages/Work";



// const Layout = ()=>{

//   return(
//     <>
//     <Header />
//     <Outlet/>
//     <Footer/>
//     </>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       }
//       ,
//       {
//         path: "/blog",
//         element: <Blog/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//       {
//         path: "/login",
//         element: <Login/>
//       },
//       {
//         path: "/register",
//         element: <Register/>
//       },
//       {
//         path: "*",
//         element: <NotfoundPage/>
//       },
//     ]
//   },
  
// ]);

function App() {
  const getTheme = ()=>{
    return JSON.parse(localStorage.getItem("darkMode") )|| false;

  }
  const [darkMode,setDarkMode] = useState(getTheme);
 
  useEffect(()=>{
    localStorage.setItem("darkMode",JSON.stringify(darkMode))

  },[darkMode])
  
  

  return (
    <BrowserRouter>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
    <Routes>
      <Route path="/" index element={<Home   darkMode={darkMode} setDarkMode={setDarkMode}/>}>
        </Route>
      <Route path="/blog" element={<Blog darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/Register"  element={<Register darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/write" element={<Write darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/about" element={<About  darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/resume" element={<Resume  darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/works" element={<Work  darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="/post/:id" element={<SinglePost darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
      <Route path="*" element={<NotfoundPage darkMode={darkMode} setDarkMode={setDarkMode}/>}> </Route>
    </Routes>
    <Footer></Footer>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

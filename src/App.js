import React  from 'react'


// import Navb from './navigation bar/navbar'
import {FaArrowDown} from 'react-icons/fa'
import './App.css';
import Twitter from "./socailmedia/twitter.js";
import Linkedin from './socailmedia/linkedin';
import Github from './socailmedia/github';
import About from './about/about';      
import Project from './project/project';
import Skill from './skill/skills';
import EC from './education and contact/eandc'




const App=()=> {

 
  return (
    
    <div className="App">
    {/* <Navb /> */}
 
    <div className="cont">
    <div className="socailcontent">
    <ul className="socail-link">
            <li className="icons"><Twitter /></li>
            <li className="icons"><Linkedin /></li>
            <li className="icons"><Github /></li>
     </ul>
    </div>
    <div className="container">
    <div className="maincontent  "> <p className="content  animate__animated animate__zoomIn"> Hey! I'm Ayush, I design & build User interfaces.
    Am a Webdeveloper</p></div>
    
    </div>
    </div>
    <div className="note">
      <p className="note-content">For Know more About me ,my experiences project.. Scroll down <FaArrowDown /></p>
    </div>
   <About />
   <Project />
   <Skill />
     <EC />


    
    

    </div>
    
  );
  }


export default App;

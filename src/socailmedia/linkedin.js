import React from 'react';
import {FaLinkedin} from "react-icons/fa"


const linkedin = () => {
//   const [state,setState]=useState(false);
  let url="https://www.linkedin.com/in/ayush-tripathi-1341651b6/";
//   let element=<p>No handle exists for this user!</p>;
//   if(state) element=<a href={url}><FaLinkedin /></a>;
  return(
    <div className="App">
     <a href={url}><FaLinkedin /></a>
    </div>
  );
};

export default linkedin;
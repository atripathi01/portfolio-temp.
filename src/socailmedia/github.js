import React from 'react';
import {FaGithub} from "react-icons/fa"


const  github = ()=> {
//   const [state,setState]=useState(false);
  let url="https://github.com/atripathi01";
//   let element=<p>No handle exists for this user!</p>;
//   if(state) element=<a href={url}><FaGithub /></a>;
  return(
    <div className="App">
    <a href={url}><FaGithub /></a>
    </div>
  );
};

export default github;
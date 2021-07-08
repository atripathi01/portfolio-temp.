import React from 'react';
import {FaTwitter} from "react-icons/fa"


const twitter= () => {
//   const [state,setState]=useState(false);
  let url="https://twitter.com/tripathi__ayush";
//   let element=<p>No handle exists for this user!</p>;
//   ?
  return(
    <div className="App">
     <a href={url}><FaTwitter /></a>
    </div>
  );
};

export default twitter;
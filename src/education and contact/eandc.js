import React from 'react';
import './eandc.css';


const ec=()=>{
    return(
        <div className="eandc">
             <div className="my-education">
          <h1 className="education-title" >Education</h1>
          <p className="batch">2019-2023</p>
          <p className="branch">Computer Science Student (CSE)</p>
          <p className="college">Government Engineering College, Rewa</p>
      </div>
      <div className="my-contact">
          <h1 className="contact-title" >Contacts</h1>
         <ul className="contact-link">
             <li className="links"><a href="https://twitter.com/tripathi__ayush">Twitter</a></li>
             <li className="links"><a href="https://www.linkedin.com/in/ayush-tripathi-1341651b6/">Linkedin</a></li>
             <li className="links"><a href="https://github.com/atripathi01">Github</a></li>
             <li className="links"><a href="mailto:ayushtripathi4113@gmail.com">Mail</a></li>
             <li className="links"><a href="https://drive.google.com/file/d/1ZMpA69HOikhJCwib-5YJiV6-AyMxUVtO/view?usp=sharing">Resume</a></li>
         </ul>
    </div>
    </div>
    );
};

export default ec;

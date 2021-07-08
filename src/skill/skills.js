import React from 'react'

import './skills.css';
import bootstrap from './bootstrap.svg';
import css from './css.svg';
import firebase from './firebase.svg';
import js from './js.svg';
import mongodb from './mongodb.svg';
import nodejs from './nodejs.svg';
import node from  './node-js.svg';
import reactJs from'./react.svg';

const skill = ()=>{
     return(
        <div className="about-skill">
        <h1 className="skill-title" >Skills</h1>
        <div className="skills">
        <img src={node} alt="NodeJs"></img>
        <img src={reactJs} alt="ReactJs"></img>
            <img src={bootstrap} alt="Bootstrap"></img>
            <img src={css} alt="Css"></img>
            <img src={firebase} alt="Firebase"></img>
            <img src={js} alt="JavaScript"></img>
            
            <img src={mongodb} alt="MongoDB"></img>
           
            <img src={nodejs} alt="NodeJs"></img>
        </div>
    </div>
     );
};

export default skill;

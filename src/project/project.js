import React from 'react';
import './project.css'
import ttt from './tic-tac-toe.svg';
import todo from './todolist.svg';
import cal from'./8198.png';
import './bootstrap.css';

const Project =()=>{
    return (
        <div className="my-work" >
       <h1 className="work-title">Works</h1>
       <div className="whole">
       <div className ="containerr">
        <div className="logo"><img className="animate__animated animate__fadeInLeftBig" src={ttt} alt="tictactoe"></img></div>
        <div className="about-project2">
        <h1 className="pt">TIC TAC TOE GAME</h1>
        <div className="explain1">
            This is <span>Tic-Tac-Toe Game(X-O Game) </span>single page web app. which was create in <span>Reactjs</span> .For Web hosting I use <span>Firebase</span> It's my react project I was created that project when start learning <span>Reactjs</span>. thats means its my first react project after learning 
            react basic . 
        </div>
        <button type="button" ><a href="https://lnkd.in/gepYcXq">VISIT</a></button>
        </div>
        </div>
        <div className ="contain">
        <div className="logo1"><img className="animate__animated animate__fadeInLeftBig" src={cal} alt="Calculator"></img></div>
        <div className="about-project2">
        <h1 className="pt-2">CALCULATOR</h1>
        <div className="explain2">I build a <span>Calculator</span> with the help of <span> HTML CSS and JS </span>.I Built this when I enter in <span>Web-development</span>.
         </div>
         <button type="button" ><a href="https://lnkd.in/gSJ8YVN">VISIT</a></button>
         </div>
                 </div>
                 <div className ="containerr">
        <div className="logo"><img className="animate__animated animate__fadeInLeftBig" src={todo} alt="todo"></img></div>
        <div className="about-project2">
        <h1 className="pt">TODO APP</h1>
        <div className="explain1">
            This is <span>Todo List App </span>single page React app. which was create in <span>Reactjs</span> .For Web hosting I use <span>Netlify.</span> I build small project for React hooks practice.
        </div>
        <button type="button" ><a href="https://csb-81pum.netlify.app/">VISIT</a></button>
        </div>
        </div>        
                 </div>
       </div>
       
       
    );
};

export default Project;
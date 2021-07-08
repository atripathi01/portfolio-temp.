import React     from 'react';
// import ReactDOM from 'react-dom'
import './bootstrap.css';
import './navbar.css';
import Logo from './Portfolio..svg'


const navb = () =>{
 return (
     <div className="position">
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light " position="fixed">
  <a className="navbar-brand" href="#"><img src={Logo}></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li class="nav-item">
        <a class="nav-link" href="https://drive.google.com/file/d/1ZMpA69HOikhJCwib-5YJiV6-AyMxUVtO/view?usp=sharing">Resume</a>
      </li>
     
     </ul>
  
  </div>
</nav>
     
</div>

/* <header>
  <nav role='navigation'>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li id="heart-trigger" class="heart heart-trigger"><span class="fa fa-heart"></span></li>
      <li><a href="#">Link 4</a></li>
      <li><a href="#">Link 5</a></li>
      <li><a href="#">Link 6</a></li>
    </ul>
  </nav>
// </header> */


     
 );
};

export default navb;
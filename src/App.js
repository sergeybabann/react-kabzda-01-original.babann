import React from 'react';
import './App.css';
import logo from './assets/icons/logo.png';
import myImage from './assets/images/beach.webp';




const App = () => {
  return (

    <div className='app-wrapper'>

    <header className='header'>
      <img src={logo} alt="Logo"/>
    </header>

    <nav className='nav'>
      <div>
      <a>Profile</a>
      </div>
      <div>
      <a>Messages</a>
      </div>
      <div>
      <a>News</a>
      </div>
      <div>
      <a>Music</a>
      </div>
      <div>
      <a>Settings</a>
      </div>
      
    </nav>

    <div className='content'>
    <img src={myImage} class="img-beach" alt="Beach"/>
    

    <div>Ava + descr</div>

    <div>
    My Posts
    <div>New post</div>
    
    <div>
      <div>Post 1</div>
      <div>Post 2</div>
    </div>

    </div>
    </div>

    </div>);
}

export default App;

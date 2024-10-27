import React from 'react';
import myImage from '../assets/images/beach.webp';

const Profile = () => {
    return <div className='content'>
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
    
}

export default Profile
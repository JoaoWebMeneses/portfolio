import React from 'react';
import Root from '../components/Root';
import "./Home.css";

function Home() {
  return (
    <div>
      <h1 id='name'>Hi, I'm João Vitor</h1>
      <div id='socialmedia'>
        <div className='icons'>
          <a href='https://github.com/JoaoWebMeneses'><img className="img" src='https://cdn-icons-png.flaticon.com/128/2111/2111425.png'/></a>
          <a href='https://github.com/JoaoWebMeneses'><img className="img" src="https://cdn-icons-png.flaticon.com/128/3938/3938052.png"/></a>
          <a href='https://github.com/JoaoWebMeneses'><img className="img" src="https://cdn-icons-png.flaticon.com/128/61/61109.png"/></a>
        </div>
      </div>
    </div>
  )
}

export default Home
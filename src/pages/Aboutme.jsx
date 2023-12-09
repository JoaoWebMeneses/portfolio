import React from 'react';
import Root from '../components/Root';
import "./Aboutme.css"

export default function Aboutme() {
  return (
    <div>
      <h1>About Me!</h1>
      <div className="paragrafos">
        <p>Comecei a programar em 2019, com 9 anos, fazendo joguinhos no Construct 3 e no Scratch.</p>
        <p>Aos 10 anos, comecei a aprender Python e fazer projetos básicos, aprimorando meus conhecimentos</p>
      </div>
      <div className="linguagens">
        <img className="imglinguagens" src='https://cdn-icons-png.flaticon.com/128/1822/1822920.png'></img>
        <img className="imglinguagens" src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'></img>
        <img className="imglinguagens" src='https://cdn-icons-png.flaticon.com/128/10832/10832132.png'></img>
        <img className="imglinguagens" src='https://cdn-icons-png.flaticon.com/128/6132/6132222.png'></img>
      </div>
    </div>
  )
}

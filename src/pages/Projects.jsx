import React from 'react'
import "./Projects.css"

function Projects() {
  return (
    <div className='pagprojects'>
      <h1>Projects</h1>
      <div className='projects'>
        <br/>
        <div className='fluxodecaixa'>
          <h2>Fluxo de Caixa</h2>
          <button id='bfluxo'><a href="https://fluxodecaixa-txlz.vercel.app">Visit</a></button>
        </div>
        <br/>
        <div className='wikireceitas'>
          <h2>WikiReceitas</h2>
          <button id='bwiki'><a href="https://wikireceitas.vercel.app">Visit</a></button>
        </div>
      </div>
    </div>
  )
}

export default Projects

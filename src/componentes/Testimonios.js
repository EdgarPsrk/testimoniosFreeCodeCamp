import React from "react";

function Testimonio(){
  return(
    <div className='contenedor-principal'>
      <img 
      className='imagen-testimonio'
      src='https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png'
      // src={require('../imagenes/testimonio-emma.png')}
      alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> Shawn Wang in Singapore</p>
        <p className='cargo-testimonio'>Software Engineer at Amazon</p>
        <p className='testo-testimonio'>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>
      </div>
    </div>
  )
}

export default Testimonio
import React from "react";
import '../stylesheets/Testimonios.css';

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src='https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png'
      // src={require('../imagenes/testimonio-emma.png')}
      alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> Shawn Wang in Singapore</p>
        <p className='cargo-testimonio'>Software Engineer at Amazon</p>
        <p className='texto-testimonio'>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>
      </div>
    </div>
  )
}

export default Testimonio;

//para crear exportaciones nombrada tenesmoq ue poner la palabra a lado de la funcion a exportar
//es decir export functin 'nameFunction' y para importarla tenemso que poner el nombre estre llaves
//es decir import {nameFunction} from .... 
import React from "react";
import '../stylesheets/Testimonios.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      // src={require('../imagenes/testimonio-emma.png')}
      alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  )
}

export default Testimonio;

//para crear exportaciones nombrada tenesmoq ue poner la palabra a lado de la funcion a exportar
//es decir export functin 'nameFunction' y para importarla tenemso que poner el nombre estre llaves
//es decir import {nameFunction} from .... 
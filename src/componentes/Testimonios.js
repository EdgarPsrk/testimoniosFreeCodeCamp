import React from "react";
import '../stylesheets/Testimonios.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={`https://www.freecodecamp.org/static/${props.imagen}.png`}
        //src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        // podemos descargar la imagen y guardarla en el archivo pero github no deberia de trabajar con archivos binarios, puede, pero no se recomienda, 
        // con lo que optamos con obtener la imagen directa de la red, pero la etiqueta src comentada seria como se obtuvo el recurso en este curso.  
        alt={`Foto de ${props.nombre}`}
      />
      <div className='contenedor-texto-testimonio'>

        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> in {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} at <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>

      </div>
    </div>
  )
}

export default Testimonio;

//para crear exportaciones nombrada tenesmoq ue poner la palabra a lado de la funcion a exportar
//es decir export functin 'nameFunction' y para importarla tenemso que poner el nombre estre llaves
//es decir import {nameFunction} from .... 
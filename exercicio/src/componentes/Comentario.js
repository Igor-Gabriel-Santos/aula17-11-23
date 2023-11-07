import React from 'react'
import '../Comentario.css'
const Comentario = ({nome, imagemusuario, alt, comentario})=>{
return(
    <div >
        <h2 className='nome'> {nome}</h2>
        <img src={imagemusuario} alt={alt} className='imagemusu'/>
        <p className='comentario'>{comentario}</p>
        
    </div>
    )
}
export default Comentario 
import React from 'react'
import '../Post.css'
const Post = ({titulo, imagem, alt, descricao, categoria})=>{
return(
    <div className="alinhar">
        <h2 className='titulo'> {titulo}</h2>
        <img src={imagem} alt={alt} className='imagem'/>
        <p className='descricao'>{descricao}</p>
        <p className='categoria'> {categoria}</p>
    </div>
    )
}
export default Post 
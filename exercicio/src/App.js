import Post from './componentes/Post'
import Comentario from './componentes/Comentario'
import Imagem from './img/xbox.png'
import imagemusuario from './img/rambo.png'

import './App.css'
function App() {
  return (
    <div>
      <h1 className='alinharmeio'>Jumento Notícias</h1>
      <Post 
      titulo="Site da Microsoft atualiza preço do Xbox Series S"
      imagem={Imagem} 
      alt="teste" 
      descricao="Depois de muita polêmica, reclamações do público e um silêncio profundo, a Microsoft atualizou o preço sugerido do Xbox Series S para R$3.599 em seu site oficial. Apesar do salto de R$900, a frase de “melhor custo-benefício em jogos” permanece em destaque dentro da página. O console era vendido oficialmente por R$2.699 e geralmente aparecia em promoções que o colocavam entre R$1.700 a R$2.000, se tornando uma grande opção aos consumidores que desejavam jogar em uma nova geração sem ter de pagar uma alta quantia – como é o caso da versão Series X ou do PlayStation 5." 
      categoria=" Categoria: Jogos"/>
      <div >
        <h2 className='alinharlado'>Seção comentários</h2>
      <Comentario
      nome="Shaolin matador de porco"
      imagemusuario={imagemusuario}
      comentario="que site brabo slc em pae nota 5"
       />
       </div>
    </div>

    
  );
}
export default App;

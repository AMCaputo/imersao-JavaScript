import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContexCarrinho } from '../App'

const product = () => {
    const {id} = useParams()
    const [produto, setProduto] = useState(null)
    const [imgSelecionada, setImgSelecionada] = useState(0)
    const [quantidade, setquantidade] = useState(1)

   const {
    carrinhoAberto, 
    setCarrinhoAberto, 
    itensCarrinho,
    setItensCarrinho,
    adicionarProduto,
} = useContext(ContexCarrinho)

    useEffect( () => {
        const requisicaoAxios =  async () => {
            const {data} = await axios.get("http://localhost:4000/produto/" + id)
            setProduto(data)
        }

        requisicaoAxios()
    }, [])

    if(!produto) return <></>

    const listaImagens = JSON.parse(produto.imagens);
    const listaCarateristicas = JSON.parse(produto.carateristicas);


  return (
      <section className="secao-produto">
        <div className="container container--produto"> 
            <div className="imagens">
                <div className="imagem-pequenas">
                    {listaImagens.map((imagem, index) =>(
                    <div onClick={() =>setImgSelecionada(index)} className={"imagem-pequena" + (imgSelecionada === index ? " imagem-pequena--selecionada" : "") } 
                    key={imagem}>
                        <img src={imagem} alt="Imagem pequena do Produto"/>
                    </div>
                    ))}
                </div>

                    

                <div className="imagem">
                    <img  src={listaImagens[imgSelecionada]} alt="Imagem grande"/>
                </div>
            </div>     
            <div className="informacoes">
                <h1>{produto.titulo}</h1>
                 <div className="produto__precos">
                        <p className="produto__preco-riscado">{produto.preco}Kz</p>
                        
                        <div className="produto__desconto">
                            <p className="produto__preco">{produto.precoDesconto}Kz</p>
                            <p className="verde">26% OFF</p>
                        </div>
                        
                        <p className="">em <span className="verde">12x {produto.precoParcelar}Kz</span></p>  
                    </div>
                    <div className="informacoes__carateristica">

                        <h2>O que você precisa saber este produto</h2>
                        <ul> {listaCarateristicas.map((carateristica, index)=>(
                            <li key={index}>{carateristica}</li>
                        ))}
                        </ul>
                    </div>
            </div>
            <div className="pedido">
                <p className="verde ">Chegará gratis amanhã</p>

                <div className="pedido_estoque">
                    <p>Estoque disponivel</p>

                    {produto.full ? 
                    <div className="pedido__full">
                        <p className="preto-55">Armazenado e enviado pelo</p>

                         <div className="verde">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="produto__icone">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                    </svg>
                    <p>FULL</p>
                </div>
                    </div>
                    : <></>
                    }
                    </div>
                    

                    <div className="pedido__quantidade">
                        <p>Quantidade</p>

                        <select onChange={(e)=> setquantidade(Number(e.target.value))} >
                            <option value="1">1 unidade</option>
                            <option value="2">2 unidade</option>
                            <option value="3">3 unidade</option>
                            <option value="4">4 unidade</option>
                            <option value="5">5 unidade</option>
                        </select>

                        <p className="preto-55">{produto.estoque} disponivel</p>
                    </div>

                <button onClick={() => adicionarProduto(quantidade, produto)}>Adicionar ao carrinho</button>
            </div>
        </div>
    </section>
  )
}

export default product
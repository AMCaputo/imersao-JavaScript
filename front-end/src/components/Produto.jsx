import {Link} from 'react-router-dom'

const Produto = ({
    id,
    titulo, 
    preco, 
    precoDesconto, 
    precoParcelar, 
    imagens,
    freteGratis,
    full,
    quantidade,
}) => {

        const percentualDesconto = Math.floor(( 1 - precoDesconto / preco) * 100);

  return (
        <Link to={'/product/' + id} className="produtos">
                
                <div className="produto">
                    <div className="produto__div-img">
                    <img src={JSON.parse(imagens)[0]} alt="Liquidificador" className="produto__img"/>
                    </div>
                    
                    <p className='produto__titulo'>
                        {titulo}
                    </p>
                    
                    <div className="produto__precos">
                        <p className="produto__preco-riscado">{preco.toLocaleString()}Kz</p>
                        
                        <div className="produto__desconto">
                            <p className="produto__preco">{precoDesconto.toLocaleString()}Kz</p>
                            <p className="verde">{percentualDesconto}% OFF</p>
                        </div>
                        
                        <p className="em__span">em <span className="verde">12x {precoParcelar.toLocaleString()}Kz</span></p>  
                    </div>
                    
                    <div className="produto__frete-full ">
                        {freteGratis ? 
                        <div className="produto__fretegratis verde">
                            Frete gratis
                        </div>
                        : <></>
                        }
                        {full ? (
                            <div className="verde">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="produto__icone">
                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                            </svg>
                            <p>FULL</p>
                        </div>
                        ) : (
                            <></>
                        )
                    }
                  </div> 
                </div>
        </Link>
  )
}

export default Produto
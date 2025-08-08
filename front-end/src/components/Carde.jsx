import React from 'react'
import {Link} from 'react-router-dom'



const Carde = ({
    id,
    imagens,
    titulo,
    preco,
    precoDesconto,
    precoParcelar,
    full,
    fretesGratis,
}) => {
    let percentualDesconto = Math.floor(100 - (precoDesconto / preco) * 100) + "% OFF";
   
    let linkImagens = JSON.parse(imagens);

  return (
    <Link to={`/product/${id}`} className='card'>
        <div className="card__img">
            <img src={linkImagens[0]} alt="Imagem do Produto" />
        </div>

        <div className="card_textos">
            <p className="card__titulo">{titulo}</p>

            <Prices>
                preco={preco}
                precoDesconto={precoDesconto}
                precoParcelar={precoParcelar}
            </Prices>

            <div className="card__frete-full">
                {fretesGratis ? <p className='card__grate-full'>Frete grátis</p> : <></>}

                {full ? <Full></Full> : <></>}
            </div>
        </div>

    </Link>
  )
}

export default Carde
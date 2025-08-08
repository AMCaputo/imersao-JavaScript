import React from 'react'



const Prices = ({
    preco, 
    precoDesconto,
    precoParcelar
}) => {
    let percentualDesconto = Math.floor(100 - (precoDesconto / preco) * 100) + "% OFF"

  return (
    <div className='card__preco'>
        <p className="card__preco-rescado">{preco.tolocaleString("pt-AOA")} Kz</p>

        <div className="card__precos-Desconto">
            <p className="card__preco-desconto">
                {precoDesconto.tolocaleString("pt-AOA")}
            </p>
            <p className="card__percentual">{percentualDesconto}</p>
        </div>

        <p>
            em{" "}
            <span className='card__parcelamento'>
                12x KZ {precoParcelar.tolocaleString("pt-AOA")} sem juros
            </span>
        </p>
    </div>
  )
}

export default Prices;
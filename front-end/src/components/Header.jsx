import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContexCarrinho } from '../App'
import CapLogo from '../assets/cap.jpg'

const Header = () => {
   const {carrinhoAberto, setCarrinhoAberto, itensCarrinho} = useContext(ContexCarrinho)

   let quantidadeCarrinho = 0;
   //const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)
   itensCarrinho.forEach((item) => (quantidadeCarrinho += item.quantidade));

  return (
     <header>
        <div className="livre">
          <Link to={'/'}>
            <img className='logo' src={CapLogo} alt="Logo do Mercado Livre"/>
          </Link>
            <div className='logo__h3'>
                <h3>mercado</h3>
                <h3>livre</h3>
            </div>
        </div>
        <div className='relativo'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="22" id="svg-icone" className="svg-icone" onClick={() => setCarrinhoAberto(true)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        {quantidadeCarrinho > 0 ? 
        <p className='carrinho__numero'>{quantidadeCarrinho}</p> : <></>
        }
        </div>
    </header>
  )
}

export default Header
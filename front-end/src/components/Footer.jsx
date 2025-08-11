import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container container--footer">
            <div className="diferenciais">

                <div className="diferencial">
                    <img className="diferencial__img" src="https://www.visa.com.br/dam/VCOM/regional/lac/brazil/media-kits/images/card-visa-gold-details1140x640.png" alt="Cartão de Credito"/>
                    <h2 className="diferencial__h2">
                        Escolha como pagar
                    </h2>
                    <p>Com Mercado Pago, você Paga em até 12x. Visa, Mastercard, American Express, Hipercard e Elo.</p>
                </div>
                <div className="barra-vertical"></div>
                <div className="diferencial">
                    <img className="diferencial__img" src="https://th.bing.com/th/id/OIP.Z7tEfNHmxojiBrMyG8k2iwHaCY?w=272&h=180&c=7&r=0&o=5&pid=1.7" alt="Cartão de Credito"/>
                    <h2 className="diferencial__h2">
                        Frete grátis a partir de 300 Kz
                    </h2>
                    <p>Ao se cadastrar no Mercado Livre, você tem frete grátis em milhares de produtos</p>
                </div>
                <div className="barra-vertical"></div>
                <div className="diferencial">
                    <img className="diferencial__img" src="https://clipground.com/images/information-security-png-8.png" alt="Cartão de Credito"/>
                    <h2 className="diferencial__h2">
                        Segurança, do início ao fim
                    </h2>
                    <p>Queremos que você se sinta seguro ao fazer suas compras. Por isso, criamos ferramentas para cuidar de você em cada etapa.</p>
                </div>

            </div>

            <div className="copyrigth">
                <p>Copyright © 2025 adelinocaputo@gmail.com</p>
                <p>NIF: 000925167LN036, Luanda Angola, Caputo & Filhos, Lda.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
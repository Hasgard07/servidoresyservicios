import React from 'react'
import CardApp from './CardApp'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
const cards = [
  {
    id: 1,
    title: 'Quienes somos',
    image: image1,
    text:'Empresa Colombiana para la venta de Imagenes Gif',
    buttonText: 'Saber mas',
    url:'/about'
  },
  {
    id: 2,
    title: 'Contactanos',
    image: image2,
    text:'Desea Contactarnos aqui nuestra info.',
    buttonText: 'Saber mas',
    url:'/contact_us'
  },
  {
    id: 1,
    title: 'Productos',
    image: image3,
    text:'Compra nuestros Gif ahora',
    buttonText: 'Comprar',
    url:'/market'
  }
]

function CardsApp () {
  return (
    <div className='container'>
      <div className='row'>
        {
          cards.map(card =>(
            <div className='col-md-4' key={card.title}>
              <CardApp title={card.title} imageSource={card.image} text={card.text} url={card.url} textButton={card.buttonText}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CardsApp

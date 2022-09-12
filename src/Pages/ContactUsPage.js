import React from 'react'
import CardApp from '../components/CardApp'
import contacImg from '../assets/descarga.png'

const card = {
    id: 1,
    title: 'Nuestra informacion',
    image: contacImg,
    text:'Celular 3008008901 email daniel.aguilar@cun.edu.co calle 2 # 5-82 Madrid Cundinamarca',
    buttonText: 'Regresar',
    url:'/home'
  };

function ContactUsPage() {
  return (
    <div className='col-md-4'>
        <CardApp title={card.title} imageSource={card.image} text={card.text} url={card.url} textButton={card.buttonText}/>
    </div>
  )
}

export default ContactUsPage

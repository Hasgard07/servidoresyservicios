import React from 'react';
import CardApp from '../components/CardApp';
import whoAre from '../assets/somos.png'
const card = {
    id: 1,
    title: 'Quienes somos',
    image: whoAre,
    text:`Un emprendimiento nacional que facilita la labor de los programadores que quieren conseguir imagenes .GIF para sus Desarrollos`,
    buttonText: 'Regresar',
    url:'/home'
  };
function AboutPage() {
    return (
        <div className='col-md-4'>
            <CardApp title={card.title} imageSource={card.image} text={card.text} url={card.url} textButton={card.buttonText}/>
        </div>
    );
}

export default AboutPage;
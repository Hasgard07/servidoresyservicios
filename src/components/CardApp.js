import React from 'react';
import { Link} from 'react-router-dom';

function CardApp({title, imageSource, url, text, textButton}) {
  return (
    <div className='card tex-center bg-dark cardMedium'>
        <img src={imageSource} alt={title}/>
        <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>{text}</p>
        <Link to={url}>
          <button className='btn btn-outline-secondary rounded-0'>{textButton}</button>
        </Link>
      </div>
    </div>
  )
}

export default CardApp

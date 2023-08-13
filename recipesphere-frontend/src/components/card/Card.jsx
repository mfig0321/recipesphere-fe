import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={props.imgsrc} alt={props.imgalt} className='card-image'/>
      <h1 className='card-title'>{props.title}</h1>
      <p className='card-description'>{props.description}</p>
      <a className='card-button' href={props.buttonlink}>{props.buttontitle}</a>
    </div>
  )
}

export default Card

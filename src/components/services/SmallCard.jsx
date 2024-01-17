import React from 'react'
import Container from '../Container'

const SmallCard = ({title, description, footer, imgUrl}) => {
  return (
  <Container className='d-lg-flex my-lg-3 p-0'>
    <img className="img-fluid rounded col-lg-5 my-3 my-lg-0" src={imgUrl} alt="" srcset="" />
    <Container className='col-lg-3 mx-lg-3 p-0'>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{footer}</p>
    </Container>
  </Container>
  )
}

export default SmallCard
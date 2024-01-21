import React from 'react'
import Container from '../Container'

const LargeCard = ({date,title,description, source, imgUrl}) => {
  return (
  <Container className='col-lg-5 my-3'>
    <img src={imgUrl} alt="" className='img-fluid rounded mb-2'/>
    <p className='text-black-50 mb-0'>{date}</p>
    <h3 className='fw-bold mb-0'>{title}</h3>
    <p className='text-secondary mb-2 text-break'>{description}</p>
    <a href="" className='text-secondary fw-bold text-decoration-none'>{source}</a>
  </Container>
  )
}

export default LargeCard
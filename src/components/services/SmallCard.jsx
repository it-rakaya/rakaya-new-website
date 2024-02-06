import React from 'react'
import Container from '../Container'
import ImgContainer from '../ImgContainer'

const SmallCard = ({title, description, footer, imgUrl}) => {
  return (
  <Container className='d-lg-flex my-lg-3 p-0'>
    <ImgContainer className='col-lg-5 my-3 my-lg-0 rounded'>
    <img className="img-fluid rounded"  src={imgUrl} alt="" srcset="" />
    </ImgContainer>
    <Container className='col-lg-4 mx-lg-3 p-0 position-relative'>
        <h4>{title}</h4>
        <p className='text-break'>{description}</p>
        {/* <p className='position-absolute bottom-0 p-0 m-0'>{footer}</p> */}
    </Container>
  </Container>
  )
}

export default SmallCard
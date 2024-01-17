import React from 'react'
import Container from '../Container'
import Link from 'next/link'
const FooterLink = ({children}) => {
  return (
    <Link href="" className='text-dark fw-semibold p-2 text-decoration-none'>
      {children}
    </Link>
  )
}

const Footer = () => {
    return (
        <footer className='mt-5'>
            <Container className='d-flex justify-content-center'>
                <h1>Rakaya</h1>
            </Container>
           <Container className='d-flex flex-wrap justify-content-center col-12 col-lg-3'>
            <FooterLink>Hello World</FooterLink>
            <FooterLink>Lorem</FooterLink>
            <FooterLink>Lorem</FooterLink>
            <FooterLink>Lorem</FooterLink>
            <FooterLink>Lorem</FooterLink>
            <FooterLink>Lorem</FooterLink>
            <FooterLink>Lorem</FooterLink>
            <FooterLink>Lorem</FooterLink>
            </Container> 
        </footer>
    )
}

export default Footer
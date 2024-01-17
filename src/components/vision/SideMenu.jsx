import React from 'react'
import Container from '../Container'
import Link from 'next/link'

const ListItem = ({children, last=false})=>{

    return(
      <div className="my-3" style={{cursor:'pointer'}}>
       <h3 className='fs-5'>{children}</h3> 
       {!last && <Separator/>}
      </div> 

    )
}

const Separator = () => (<hr className='bg-white-50'/>)
const SideMenu = () => {
  return (
   <Container className='col-lg-3 text-center text-lg-start mx-3 mb-5 my-lg-0'>
    <ListItem>Hello World</ListItem>
    <ListItem>Hello World</ListItem>
    <ListItem>Hello World</ListItem>
    <ListItem>Hello World</ListItem>
    <ListItem last>Hello World</ListItem>
   </Container> 
  )
}

export default SideMenu
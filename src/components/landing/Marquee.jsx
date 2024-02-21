import React from 'react'
import Container from '../Container'
import Marquee from 'react-fast-marquee'
import styles from '@/styles/landing.module.scss';
import i18n from '@/i18n';

/**
 * @param {{imgArray:string[]; reverse:boolean;}} 
 */
const Bar = ({imgArray, reverse})=>{
    return(
        <Marquee className={`my-4`} speed={reverse ? 50 : 80} autoFill direction={reverse ? 'right':'left'}>
            {imgArray.map((img, index)=>{
            return (<img src={img} className={`rounded rounded-3 mx-4 img-fluid ${styles['img-card']}`} style={{maxHeight:'300px'}} key={index}/> )
            })}
        </Marquee>
    )
}
const images = ['https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
const MyMarquee = () => {
  return (
    <Container className='bg-black py-3 px-0 overflow-hidden' dir={'ltr'}>
        <Container className='mb-2'>
        <Bar imgArray={images}/>
        <Bar imgArray={images} reverse/>
        </Container >
        <Container className='text-center' dir={i18n.dir(i18n.language)}>
            <h2 className='text-gold'>Best in the industry</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem delectus facilis voluptatum obcaecati sapiente quidem tenetur modi mollitia amet, similique ab esse tempora nemo harum nam tempore? Rem amet dolores, quam quis recusandae asperiores ipsa, excepturi unde enim deleniti alias dicta. Dolore, minima excepturi! Qui, est vitae repellat cumque ullam ea! Dolorum est iste accusamus minus corporis optio harum et neque praesentium. Aperiam minus quis non dolor, consequuntur fugit. Sint sunt iure ratione corporis libero distinctio, quidem facilis reprehenderit ab.</p>
        </Container>
    </Container>
  )
}

export default MyMarquee 
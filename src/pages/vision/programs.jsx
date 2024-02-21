import Container from '@/components/Container';
import VisionLayout from '@/components/vision/VisionLayout'
import React from 'react'
const Program = ({ title, description }) => (
   <Container>
      <div className="d-flex align-items-baseline mb-1 gap-3 text-gold">
         <i class="bi bi-grid-1x2 fs-4"></i>
         <h4>{title}</h4>
      </div>
      <p>{description}</p>
   </Container>
);

const programs = () => {
  return (
  <VisionLayout>

    <Program title="جسر" description="شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر "/>
    <Program title="تريلو" description="شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر "/>
  </VisionLayout>
  )
}

export default programs
import Container from "@/components/Container"
import Content from "@/components/landing/Content"
import Header from "@/components/landing/Header"
import Join from "@/components/landing/Join"
import Marquee from "@/components/landing/Marquee"
import Stats from "@/components/landing/Stats"

const index = () => {
  return (
    <Container className='mx-0 px-0'>
      <Header />
      <Stats />
      <Marquee/>
      <Content />
    </Container>
  )
}

export default index
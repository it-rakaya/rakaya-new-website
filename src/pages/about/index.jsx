import Container from "@/components/Container";
import React from "react";

const Section = ({ title, children }) => (
  <Container className="m-0 p-0">
    <h1>{title}</h1>
    <p>{children}</p>
  </Container>
);

const TeamMember = ({title, job})=>(
  <div className="col-6 col-lg-3">
    <h5 className="fw-semibold fs-5 my-0">{title}</h5>
    <h5 className="text-body-tertiary fw-regular fs-6">{job}</h5>
  </div>
)

function index() {
  return (
    <Container className="col-lg-6">
      <h1 className="mb-5 mt-3">About Rakaya</h1>
      <Section title={"Hello World"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
        facilis, culpa pariatur, libero assumenda aspernatur aliquam itaque at
        praesentium blanditiis nostrum necessitatibus voluptate, laborum a et
        deserunt soluta repellat. Explicabo nostrum officia esse magni magnam
        fugit accusamus numquam doloremque temporibus aspernatur earum
        architecto iusto repudiandae quam ratione, perspiciatis tempore
        consectetur doloribus! Hic eligendi ducimus cum? Veritatis officiis
        aspernatur, eaque error facere a voluptatibus dolore. Distinctio, non
        exercitationem? Saepe culpa nobis id eaque itaque asperiores, dolore
        voluptatum ratione molestias et?
      </Section>
      <Section title={"Hello World"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
        facilis, culpa pariatur, libero assumenda aspernatur aliquam itaque at
        praesentium blanditiis nostrum necessitatibus voluptate, laborum a et
        deserunt soluta repellat. Explicabo nostrum officia esse magni magnam
        fugit accusamus numquam doloremque temporibus aspernatur earum
        architecto iusto repudiandae quam ratione, perspiciatis tempore
        consectetur doloribus! Hic eligendi ducimus cum? Veritatis officiis
        aspernatur, eaque error facere a voluptatibus dolore. Distinctio, non
        exercitationem? Saepe culpa nobis id eaque itaque asperiores, dolore
        voluptatum ratione molestias et?
      </Section>
      <Section title={"Hello World"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
        facilis, culpa pariatur, libero assumenda aspernatur aliquam itaque at
        praesentium blanditiis nostrum necessitatibus voluptate, laborum a et
        deserunt soluta repellat. Explicabo nostrum officia esse magni magnam
        fugit accusamus numquam doloremque temporibus aspernatur earum
        architecto iusto repudiandae quam ratione, perspiciatis tempore
        consectetur doloribus! Hic eligendi ducimus cum? Veritatis officiis
        aspernatur, eaque error facere a voluptatibus dolore. Distinctio, non
        exercitationem? Saepe culpa nobis id eaque itaque asperiores, dolore
        voluptatum ratione molestias et?
      </Section>


      <Container className="row p-0">
        <h3 className="col-12">Rakaya Team</h3> 
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
        <TeamMember title={'Jawad'} job={'Programmer'}/>
      </Container>
    </Container>
  );
}

export default index;

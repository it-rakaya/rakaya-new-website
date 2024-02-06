import Container from "@/components/Container";
import React from "react";

const Content = ({ title, children }) => {
   return (
      <Container className="p-0">
         <h3>{title}</h3>
         <p>{children}</p>
      </Container>
   );
};

const Box = ()=>{
   return(
      <div style={{height:'100%', backgroundColor:'rgb(200,200,200)'}} className="d-flex flex-column align-items-center w-lg-25 w-100 p-3 rounded mt-3 m-lg-0">
         <h1 className="text-white">Box</h1>
         <button className="btn btn-primary bg-primary border-0">Apply Now</button>
      </div>
   )
}
const index = () => {
   return (
      <Container className="col-lg-8 mt-5">
         <Container className="d-lg-flex">
            <Container className="mb-3">
               <h1>Lorem, ipsum dolor.</h1>
            </Container>
            <Container className="col-lg-8">
               <Content title={"Hello World"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate iste doloribus magni, accusamus molestias totam
                  reprehenderit maxime iusto cum sint asperiores voluptatem unde
                  maiores quibusdam esse eum repudiandae, deserunt quidem
                  consequatur molestiae laborum sed vero. Eius commodi minus
                  maxime facere nulla obcaecati voluptatum quae exercitationem
                  eveniet sapiente dignissimos enim neque quo laboriosam, iste
                  ipsum adipisci rerum quasi expedita. Ipsa, excepturi ratione,
                  autem blanditiis quisquam quasi ducimus cumque molestiae nemo
                  commodi voluptatem incidunt explicabo fugiat nulla dolorum et
                  tenetur dicta nisi eaque eius? Labore quas, a commodi,
                  voluptate illo necessitatibus porro aspernatur doloremque
                  natus eos quia deleniti ipsa aliquid culpa iure
                  exercitationem! Culpa assumenda velit dolore facilis
                  laudantium aperiam optio fugit, animi id obcaecati hic nihil,
                  pariatur sapiente quas aspernatur quasi molestias, aliquam
                  ipsum. Sed illum beatae blanditiis ad fuga officia veritatis
                  dolor nulla magni, tempore eos asperiores labore ab harum
                  minima molestiae quisquam repellat nobis praesentium libero
                  cum aut vitae!
               </Content>
               <Content title={"Hello World"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate iste doloribus magni, accusamus molestias totam
                  reprehenderit maxime iusto cum sint asperiores voluptatem unde
                  maiores quibusdam esse eum repudiandae, deserunt quidem
                  consequatur molestiae laborum sed vero. Eius commodi minus
                  maxime facere nulla obcaecati voluptatum quae exercitationem
                  eveniet sapiente dignissimos enim neque quo laboriosam, iste
                  ipsum adipisci rerum quasi expedita. Ipsa, excepturi ratione,
                  autem blanditiis quisquam quasi ducimus cumque molestiae nemo
                  commodi voluptatem incidunt explicabo fugiat nulla dolorum et
                  tenetur dicta nisi eaque eius? Labore quas, a commodi,
                  voluptate illo necessitatibus porro aspernatur doloremque
                  natus eos quia deleniti ipsa aliquid culpa iure
                  exercitationem! Culpa assumenda velit dolore facilis
                  laudantium aperiam optio fugit, animi id obcaecati hic nihil,
                  pariatur sapiente quas aspernatur quasi molestias, aliquam
                  ipsum. Sed illum beatae blanditiis ad fuga officia veritatis
                  dolor nulla magni, tempore eos asperiores labore ab harum
                  minima molestiae quisquam repellat nobis praesentium libero
                  cum aut vitae!
               </Content>
               <Content title={"Hello World"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate iste doloribus magni, accusamus molestias totam
                  reprehenderit maxime iusto cum sint asperiores voluptatem unde
                  maiores quibusdam esse eum repudiandae, deserunt quidem
                  consequatur molestiae laborum sed vero. Eius commodi minus
                  maxime facere nulla obcaecati voluptatum quae exercitationem
                  eveniet sapiente dignissimos enim neque quo laboriosam, iste
                  ipsum adipisci rerum quasi expedita. Ipsa, excepturi ratione,
                  autem blanditiis quisquam quasi ducimus cumque molestiae nemo
                  commodi voluptatem incidunt explicabo fugiat nulla dolorum et
                  tenetur dicta nisi eaque eius? Labore quas, a commodi,
                  voluptate illo necessitatibus porro aspernatur doloremque
                  natus eos quia deleniti ipsa aliquid culpa iure
                  exercitationem! Culpa assumenda velit dolore facilis
                  laudantium aperiam optio fugit, animi id obcaecati hic nihil,
                  pariatur sapiente quas aspernatur quasi molestias, aliquam
                  ipsum. Sed illum beatae blanditiis ad fuga officia veritatis
                  dolor nulla magni, tempore eos asperiores labore ab harum
                  minima molestiae quisquam repellat nobis praesentium libero
                  cum aut vitae!
               </Content>
               <Content title={"Hello World"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate iste doloribus magni, accusamus molestias totam
                  reprehenderit maxime iusto cum sint asperiores voluptatem unde
                  maiores quibusdam esse eum repudiandae, deserunt quidem
                  consequatur molestiae laborum sed vero. Eius commodi minus
                  maxime facere nulla obcaecati voluptatum quae exercitationem
                  eveniet sapiente dignissimos enim neque quo laboriosam, iste
                  ipsum adipisci rerum quasi expedita. Ipsa, excepturi ratione,
                  autem blanditiis quisquam quasi ducimus cumque molestiae nemo
                  commodi voluptatem incidunt explicabo fugiat nulla dolorum et
                  tenetur dicta nisi eaque eius? Labore quas, a commodi,
                  voluptate illo necessitatibus porro aspernatur doloremque
                  natus eos quia deleniti ipsa aliquid culpa iure
                  exercitationem! Culpa assumenda velit dolore facilis
                  laudantium aperiam optio fugit, animi id obcaecati hic nihil,
                  pariatur sapiente quas aspernatur quasi molestias, aliquam
                  ipsum. Sed illum beatae blanditiis ad fuga officia veritatis
                  dolor nulla magni, tempore eos asperiores labore ab harum
                  minima molestiae quisquam repellat nobis praesentium libero
                  cum aut vitae!
               </Content>
               <Content title={"Hello World"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate iste doloribus magni, accusamus molestias totam
                  reprehenderit maxime iusto cum sint asperiores voluptatem unde
                  maiores quibusdam esse eum repudiandae, deserunt quidem
                  consequatur molestiae laborum sed vero. Eius commodi minus
                  maxime facere nulla obcaecati voluptatum quae exercitationem
                  eveniet sapiente dignissimos enim neque quo laboriosam, iste
                  ipsum adipisci rerum quasi expedita. Ipsa, excepturi ratione,
                  autem blanditiis quisquam quasi ducimus cumque molestiae nemo
                  commodi voluptatem incidunt explicabo fugiat nulla dolorum et
                  tenetur dicta nisi eaque eius? Labore quas, a commodi,
                  voluptate illo necessitatibus porro aspernatur doloremque
                  natus eos quia deleniti ipsa aliquid culpa iure
                  exercitationem! Culpa assumenda velit dolore facilis
                  laudantium aperiam optio fugit, animi id obcaecati hic nihil,
                  pariatur sapiente quas aspernatur quasi molestias, aliquam
                  ipsum. Sed illum beatae blanditiis ad fuga officia veritatis
                  dolor nulla magni, tempore eos asperiores labore ab harum
                  minima molestiae quisquam repellat nobis praesentium libero
                  cum aut vitae!
               </Content>
               <Content title={"Hello World"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate iste doloribus magni, accusamus molestias totam
                  reprehenderit maxime iusto cum sint asperiores voluptatem unde
                  maiores quibusdam esse eum repudiandae, deserunt quidem
                  consequatur molestiae laborum sed vero. Eius commodi minus
                  maxime facere nulla obcaecati voluptatum quae exercitationem
                  eveniet sapiente dignissimos enim neque quo laboriosam, iste
                  ipsum adipisci rerum quasi expedita. Ipsa, excepturi ratione,
                  autem blanditiis quisquam quasi ducimus cumque molestiae nemo
                  commodi voluptatem incidunt explicabo fugiat nulla dolorum et
                  tenetur dicta nisi eaque eius? Labore quas, a commodi,
                  voluptate illo necessitatibus porro aspernatur doloremque
                  natus eos quia deleniti ipsa aliquid culpa iure
                  exercitationem! Culpa assumenda velit dolore facilis
                  laudantium aperiam optio fugit, animi id obcaecati hic nihil,
                  pariatur sapiente quas aspernatur quasi molestias, aliquam
                  ipsum. Sed illum beatae blanditiis ad fuga officia veritatis
                  dolor nulla magni, tempore eos asperiores labore ab harum
                  minima molestiae quisquam repellat nobis praesentium libero
                  cum aut vitae!
               </Content>
            </Container>
         </Container>
         <Container className="mt-3 d-lg-flex">
            <Container className="">
            <h2 >Apply Now !</h2>
            </Container>
            <Container className="col-lg-8">
            <Box/>
            </Container>
         </Container>
      </Container>
   );
};

export default index;

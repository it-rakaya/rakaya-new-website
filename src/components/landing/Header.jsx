import Button from "../Button";
import Container from "../Container";
import Navbar, { NavLink } from "./Navbar";

const Header = () => {
   return (
      <Container className="w-100 bg-forth p-5">
         {/* <Navbar /> */}
         <Container
            className={
               "d-flex flex-column align-items-center justify-content-center text-center w-100 gap-4 mb-3"
            }>
            <h1 className="fs-1 d-none d-lg-block">Rakaya</h1>

            <p
               className="fs-4 fw-semibold mw-50 text-center"
               style={{ maxWidth: "80%" }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
               molestiae praesentium, aspernatur nulla voluptates debitis vero!
               Quod nihil impedit incidunt?
            </p>
         </Container>
         
         <Container className="d-flex justify-content-center">
         <Button color="secondary">Read More</Button>
         </Container>
      </Container>
   );
};

export default Header;

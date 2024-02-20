import React from "react";
import Container from "../Container";
import Button from "../Button";

const Join = () => {
   return (
      <Container className="py-5 bg-secondary d-flex justify-content-center flex-column">
         <Container className="py-3 text-center col-lg-5 ">
            <div className="mb-3">
               <h3 className="text-white">Would you like to join</h3>
            </div>
            <div>
               <h4 className="text-white fw-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores fuga mollitia architecto nulla necessitatibus!
               </h4>
            </div>
         </Container>
         <Container className="w-25 d-flex justify-content-center mt-2">
            <Button color="third" className="text-primary text-center">
               Read More
            </Button>
         </Container>
      </Container>
   );
};

export default Join;

import Container from "../Container";
import Header from "../jobs/Header";
import Content from "./Content";
import SideMenu from "./SideMenu";
const VisionLayout = ({ title, children }) => {
   return (
      <>
      <Header text={"ركايا البديعة"} />

      <Container className="d-flex flex-wrap col-12 col-lg-10 my-3 my-lg-5 ms-5">
         <SideMenu />
         <Content title={title}>{children}</Content>
      </Container>
      </>
   );
};

export default VisionLayout;

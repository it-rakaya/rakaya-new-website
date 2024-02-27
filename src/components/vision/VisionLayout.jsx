import { useRouter } from "next/router";
import Container from "../Container";
import CustomHead from "../CustomHead";
import Header from "../jobs/Header";
import Content from "./Content";
import SideMenu from "./SideMenu";
const VisionLayout = ({ title, children }) => {
  const router = useRouter();

  return (
    <>
      <CustomHead title={"ركايا البديعة"} description={"home page rakaya"} />

      <Header text={"ركايا البديعة"} />

      <Container className="d-flex flex-wrap col-12 col-lg-10 my-3 my-lg-5 ms-5">
        <SideMenu />
        <Content title={title} id={'content'}>{children}</Content>
      </Container>
    </>
  );
};

export default VisionLayout;

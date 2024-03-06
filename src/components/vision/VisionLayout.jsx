import { useRouter } from "next/router";
import Container from "../Container";
import Content from "./Content";
import SideMenu from "./SideMenu";
const VisionLayout = ({ title, children }) => {
  const router = useRouter();

  return (
    <>
      {/* <CustomHead title={"ركايا البديعة"} description={"home page rakaya"} /> */}
      <Container className="d-flex flex-wrap col-12 col-lg-10 my-3 my-lg-5 ms-5">
        <SideMenu />
        <Content title={title} id={'content'}>{children}</Content>
      </Container>
    </>
  );
};

export default VisionLayout;

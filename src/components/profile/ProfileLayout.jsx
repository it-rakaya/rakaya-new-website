import Container from "../Container";
import ContentProfile from "./ContentProfile";
import SideMenuProfile from "./SideMenuProfile";
const ProfileLayout = ({ title, children }) => {
  return (
    <>
      <div
        className="d-flex flex-wrap col-12 col-lg-10  text_Dark  "
        style={{ backgroundColor: "#e3e3e35e" }}
      >
        <SideMenuProfile />
        <ContentProfile title={title} id={"content"}>
          {children}
        </ContentProfile>
      </div>
    </>
  );
};

export default ProfileLayout;

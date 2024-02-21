import Button from "../Button";
import Container from "../Container";
import Logo from "../Logo";
import Navbar, { NavLink } from "./Navbar";

const Header = () => {
   return (
      <Container className="w-100 bg-forth p-5">
         {/* <Navbar /> */}
         <Container
            className={
               "d-flex flex-column align-items-center justify-content-center text-center w-100 gap-4 mb-3"
            }>
            {/* <h1 className="fs-1 d-none d-lg-block">Rakaya</h1> */}
            <div className="col-lg-2 col-8 my-5 py-2">
            <Logo/>
            </div>

            <p
               className="fs-1 fw-semibold mw-50 text-center col-lg-3"
               style={{ maxWidth: "80%" }}>
               مَتَى تَصِلُ العِطَاشُ إِلى ارْتِوَاءٍ إِذَا اسْتَقَتِ البِحَارُ
               مِن الرَّكَايَا
            </p>
            <p className="fs-3 col-lg-5">
               في زمن الوصول السريع ، للأشخاص والأماكن والمعلومة ، ركايا تحمل
               معنيين  الأول هو البئر الذي لا نفاذ له كذلك أفكارنا ، إبداعنا ،
               شغفنا ، عطائنا  الثاني الاعتمادية فنحن نملك مستشارين يُرتكى عليهم
            </p>
         </Container>

         <Container className="d-flex justify-content-center">
            <Button color="secondary">تعرف على ركايا البديعة</Button>
         </Container>
      </Container>
   );
};

export default Header;

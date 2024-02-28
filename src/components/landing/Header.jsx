import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import Logo from "../Logo";
import PatternIcon from "../icons/PatternIcon";
import PatternIconTwo from "../icons/PatternIconTwo";
import Navbar, { NavLink } from "./Navbar";

const Header = () => {
  return (
    <Container className="w-100  p-5 position-relative">
      {/* <Navbar /> */}
      <Container
        className={
          "d-flex flex-column align-items-center justify-content-center text-center w-100 gap-3 mb-3 "
        }
      >
        {/* <h1 className="fs-1 d-none d-lg-block">Rakaya</h1> */}
        <div className="col-lg-2 col-8 my- py-2">
          <Logo />
        </div>
        <div>
          <p
            className="fs-1 fw-semibold mw-50 text-center col-lg-5 mb-0 w-100"
            style={{ maxWidth: "100%" }}
          >
            مَتَى تَصِلُ العِطَاشُ إِلى ارْتِوَاءٍ
          </p>
          <p
            className="fs-1 fw-semibold mw-50 text-center col-lg-5 mt-0 pt-0 w-100"
            style={{ maxWidth: "100%" }}
          >
            إِذَا اسْتَقَتِ البِحَارُ مِن الرَّكَايَا
          </p>
        </div>
        <p className="fs-5  col-lg-5">
          في زمن الوصول السريع ، للأشخاص والأماكن والمعلومة ، ركايا تحمل معنيين 
          الأول هو البئر الذي لا نفاذ له كذلك أفكارنا ، إبداعنا ، شغفنا ،
          عطائنا  الثاني الاعتمادية فنحن نملك مستشارين يُرتكى عليهم
        </p>
      </Container>
      <div className="patternLanding text-start">
        <PatternIconTwo className="img-fluid col-4 col-lg-10 " />
      </div>
      <div className="patternLandingRight text-end">
        <PatternIconTwo className="img-fluid col-4 col-lg-10 " />
      </div>

      <Container className="d-flex justify-content-center">
        <Link href={"/vision"}>
          <Button color="secondary">تعرف على ركايا البديعة</Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Header;

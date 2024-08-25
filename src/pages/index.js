import CustomHead from "@/components/CustomHead";
import Content from "@/components/landing/Content";
// import Header from "@/components/landing/Header";
import Marquee from "../components/landing/Marquee";
import Stats from "../components/landing/Stats";
import Header from "../components/landing/Header";
import Container from "../components/Container";
// import fetchData from "@/utils/fetchData";

export default function Home({data}) {
  const description =
    "في زمن الوصول السريع ، للأشخاص والأماكن والمعلومة ، ركايا تحمل معنيين  الأول هو البئر الذي لا نفاذ له كذلك أفكارنا ، إبداعنا ، شغفنا ، عطائنا  الثاني الاعتمادية فنحن نملك مستشارين يُرتكى عليهم";
  return (
    <>
      <CustomHead customTitle={"ركايا البديعة"} description={description} />
      <Container className="mx-0 px-0">
        <Header />
        <Stats />
        <Marquee />
        <Content />
      </Container>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { params, req, res } = context;
//   // const keyValuePairs = req?.headers?.cookie?.split(";");
//   // const languagePair = keyValuePairs?.find((pair) => pair.includes("i18next"));
//   // const language = languagePair ? languagePair.split("=")[1] : "en";
//   const bank = await fetchData("all-departments");
//   return {
//     props: {
//       data:bank,
//     },
//   };
// }

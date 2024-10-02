import Container from "../../components/Container";
import CustomHead from "../../components/CustomHead";
import Header from "../../components/jobs/Header";
import VisionLayout from "../../components/vision/VisionLayout";
import Card from "../../components/vision/services/Card";
import { services } from "../../data";
import fetchData from "../../utils/fetchData";

const Services = ({ data }) => {
  console.log("🚀 ~ Services ~ services:", data);
  const description =
    "نؤمن بأن كل عمل لا يتم بإتقان من غير أسس أخلاقية مهنية نسترشد بها وترسّخ علاقتنا بعملائنا ";
  return (
    <>
      <CustomHead title={"خدماتنا"} description={description} />

      <Header text={"خدماتنا"} />

      <VisionLayout title="خدماتنا">
        <p>
          نؤمن بأن كل عمل لا يتم بإتقان من غير أسس أخلاقية مهنية نسترشد بها
          وترسّخ علاقتنا بعملائنا 
        </p>
        <Container className="row ">
          {data?.services?.map((item, index) => (
            <Card title={item?.name} key={index}>
              <p className="mb-1 my-2 text-justify ">{item?.subTitle}</p>
              {item?.description?.split("\n").map((line, idx) => (
                <p className="my-1 text-justify px-2" key={idx}>
                  {line}
                </p>
              ))}
            </Card>
          ))}
        </Container>
      </VisionLayout>
    </>
  );
};

export default Services;
export async function getServerSideProps(context) {
  const services = await fetchData("services");
  return {
    props: {
      data: services,
    },
  };
}

import Container from "@/components/Container";
import Header from "@/components/jobs/Header";
import VisionLayout from "@/components/vision/VisionLayout";
import Card from "@/components/vision/services/Card";
import { services } from "@/data";

const Services = () => {
  return (
    <>
      <Header text={"خدماتنا"} />

      <VisionLayout title="خدماتنا">
        <p>
          نؤمن بأن كل عمل لا يتم بإتقان من غير أسس أخلاقية مهنية نسترشد بها
          وترسّخ علاقتنا بعملائنا 
        </p>
        <Container className="col-12 d-flex flex-wrap justify-content-center justify-content-lg-start mx-0 gap-3">
          {services?.map((item, index) => (
            <Card title={item?.title} key={index}>
              <p className="mb-1">{item?.subTitle}</p>
              {item?.items.map((point, index) => (
                <p className="my-1" key={index}>
                  - {point?.item}
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

import Container from "@/components/Container";
import CustomHead from "@/components/CustomHead";
import Content from "@/components/landing/Content";
import Header from "@/components/landing/Header";
import Marquee from "@/components/landing/Marquee";
import Stats from "@/components/landing/Stats";

export default function Home() {
  
  const description =
    "ركايا تبتكر حلولاً استراتيجية مخصصة لمواجهة التحديات الإدارية والتسويقية، مما يساعد الشركات على تحقيق نمو مستدام وتوضيح رؤيتها المستقبلية. فريقنا المميز يعمل جنباً إلى جنب معك لتحديد وحل العقبات الرئيسية بخطط مبتكرة تتوافق مع أهداف شركتك";
  return (
    <>
      <CustomHead
        title={"الصفحة الرئيسية"}
        description={description}
        imageUrl={"/favicon.ico"}
      />
      <Container className="mx-0 px-0">
        <Header />
        <Stats />
        <Marquee />
        <Content />
      </Container>
    </>
  );
}

import Container from "@/components/Container";
import CustomHead from "@/components/CustomHead";
import TOTop from "@/components/TOTop";
import Content from "@/components/landing/Content";
import Header from "@/components/landing/Header";
import Marquee from "@/components/landing/Marquee";
import Stats from "@/components/landing/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <CustomHead title={"الصفحه الرئيسية"} description={"home page rakaya"} />
      <Container className="mx-0 px-0">
        <Header />
        <Stats />
        <Marquee />
        <Content />
        <div className="bg-danger"></div>
      </Container>
    </>
  );
}

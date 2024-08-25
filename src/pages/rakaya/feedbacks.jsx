import CustomHead from "../../components/CustomHead";
import Header from "../../components/jobs/Header";
import VisionLayout from "../../components/vision/VisionLayout";
import fetchData from "../../utils/fetchData";
import React from "react";
const impact = ({ data }) => {
  const description = "قَبس .. اقتباسات نعُدها شعلة مضيئة تزيد من توهجنا";
  return (
    <>
      <CustomHead title={"قَبس عن ركايا"} description={description} />

      <Header text={"قَبس عن ركايا"} />

      <VisionLayout>
        <h1>قَبس</h1>
        <h5>اِقتباسات نعُدها شعلة مضيئة تزيد من توهّجنا</h5>
        <div className="mainBoxBLog my-5">
          {data?.quotes?.map((item, index) => (
            <div className="blogBox mt-5 " key={item?.id}>
              <h5>{item?.quote}</h5>
              <p className="text-start mt-3 mb-0">{item?.author} </p>
            </div>
          ))}
        </div>
      </VisionLayout>
    </>
  );
};

export default impact;

export async function getServerSideProps(context) {
  const quotes = await fetchData("quotes");
  return {
    props: {
      data: quotes,
    },
  };
}

import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import CustomHead from "../../components/CustomHead";
import BlogCard from "../../components/blog/BlogCard";
import Header from "../../components/jobs/Header";
import fetchData from "../../utils/fetchData";
import Loading from "../../components/Loading";

const Blogs = ({ initialData }) => {
  const description = "كل أخبار وأحداث ركايا تجدها هنا في مكان واحد.";
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);

  useEffect(() => {
    if (!initialData) {
      const fetchDataAsync = async () => {
        setLoading(true);
        const blogs = await fetchData("blogs");
        setData(blogs);
        setLoading(false);
      };

      fetchDataAsync();
    }
  }, [initialData]);

  const sortedBlogs = data?.blogs?.sort(
    (a, b) => a?.arrangement - b?.arrangement
  );
  return (
    <>
      <CustomHead title={"مدونة ركايا"} description={description} />
      <Header
        text={"مدونة ركايا"}
        subTitle={"هنا تجد أحدث أخبار وأحداث ركايا"}
        image={"/studio/headers-bg/4.webp"}
      />

      <Container className="col-lg-12 d-flex flex-column align-items-center py-4 rakayaStudio mx-md-4">
        {/* <h1 className="align-self-start text_Dark">المدونة</h1> */}
        <Container className="col-12 d-flex flex-wrap mt-3 ">
          {loading ? (
            <div className="w-100 d-flex justify-content-center"> 
              <Loading />

            </div>
          ) : (
            sortedBlogs?.map((item) => (
              <BlogCard
                key={item?.id}
                slug={item?.slug}
                date={item?.created_at?.slice(0, 10)}
                title={item?.title}
                description={item?.description}
                content={item?.content}

              />
            ))
          )}
        </Container>
      </Container>
    </>
  );
};

export default Blogs;
export async function getServerSideProps(context) {
  const blogs = await fetchData("blogs");
  return {
    props: {
      initialData: blogs,
    },
  };
}

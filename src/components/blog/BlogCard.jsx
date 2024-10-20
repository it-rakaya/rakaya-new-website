import React from "react";
import Container from "../Container";
import Link from "next/link";

const BlogCard = ({ date, title, description , slug , content }) => {
  return (
    <Container className="col-lg-5 my-2">
      <p className="fw-light text-dark">{date}</p>
      <Link href={`/blog/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <p className="text-secondary text-break">{description}</p>
      {/* <p dangerouslySetInnerHTML={{__html:content}}/> */}
    </Container>
  );
};

export default BlogCard;

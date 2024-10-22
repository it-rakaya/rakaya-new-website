import React, { useContext } from "react";
import Container from "../Container";
import Link from "next/link";
import {
  DarkModeContext,
  DarkModeProvider,
} from "../../context/DarkModeContext";

const BlogCard = ({ date, title, description, slug, content }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <Container className="col-lg-5 my-2">
      <p className="fw-light text_Dark">{date}</p>
      <Link href={`/blog/${slug}`} className="text_Dark">
        <h3>{title}</h3>
      </Link>
      <p className={`${isDarkMode ? "text-gold " : "text-secondary"} `}>
        {description}
      </p>
      {/* <p dangerouslySetInnerHTML={{__html:content}}/> */}
    </Container>
  );
};

export default BlogCard;

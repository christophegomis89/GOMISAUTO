import React from "react";
import "../../styles/BlogList.css";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => {
        return <BlogItem item={item} key={item.id} />;
      })}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;
  return (
    <Col lg="4" md="4" sm="6" className="blog_list mb-5">
      <div className="blog_item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog_info p-3">
          <Link to={`/blogs/${title}`} className="blog_title">
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>
          <Link to={`/blogs/${title}`} className="read-more">
            En Savoir Plus
          </Link>
          <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog_author">
              <i className="ri-user-line">{author}</i>
            </span>
            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1 section_description">
                <i className="ri-calendar-line">{date}</i>
              </span>
              <span className="d-flex align-items-center gap-1 section_description">
                <i className="ri-time-line">{time}</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;

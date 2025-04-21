import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ token, title, content }) => {
  return (
    <Link to={`/blog/${token}`}>
      <div className="blogCard">
        <div className="index">
          <div className="title">{title}</div>
          <div className="author"></div>
        </div>
        <div className="teaser">
          {content.length > 20 ? `${content.substring(0, 40)}...` : content}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

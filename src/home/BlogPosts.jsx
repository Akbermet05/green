import React from "react";
import { posts } from "../helpers/posts";
import scss from "./BlogPosts.module.scss";
const BlogPosts = () => {
  return (
    <div className="container">
      <div className={scss.block}>
        {posts.map((el, index) => (
          <>
            <div key={index} className={scss.posts_title}>
              <h1>{el.tittle}</h1>
              <p>{el.tittle1}</p>
            </div>
            {/* <img src={image} alt="" /> */}
            <div className={scss.box}>
              <h2>{el.h2}</h2>
              <h1>{el.h1}</h1>
              <p>{el.p}</p>
              <button>{el.btn}</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;

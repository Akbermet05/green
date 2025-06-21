import React from "react";
import { posts } from "../helpers/posts";
import scss from "./BlogPosts.module.scss";
import { BiArrowToRight } from "react-icons/bi";

const BlogPosts = () => {
  return (
    <div className="container">
      {posts.map((el, index) => (
        <div className={scss.posts}>
          <div key={index} className={scss.posts_title}>
            <h1>{el.tittle}</h1>
            <p>{el.tittle1}</p>
          </div>
          <div className={scss.block}>
            <div className={scss.posts_cart}>
              <img src={el.image} alt="" />
              <div className={scss.box}>
                <h2>{el.h2}</h2>
                <h1>{el.h1}</h1>
                <p>{el.p}</p>
                <button>
                  {el.btn} <BiArrowToRight />
                </button>
              </div>
            </div>
            <div className={scss.posts_cart}>
              <img src={el.image1} alt="" />
              <div className={scss.box}>
                <h2>{el.h3}</h2>
                <h1>{el.h2}</h1>
                <p>{el.p}</p>
                <button>
                  {el.btn} <BiArrowToRight />
                </button>
              </div>
            </div>
            <div className={scss.posts_cart}>
              <img src={el.image} alt="" />
              <div className={scss.box}>
                <h2>{el.h2}</h2>
                <h1>{el.h1}</h1>
                <p>{el.p}</p>
                <button>
                  {el.btn} <BiArrowToRight />
                </button>
              </div>
            </div>
            <div className={scss.posts_cart}>
              <img src={el.image} alt="" />
              <div className={scss.box}>
                <h2>{el.h2}</h2>
                <h1>{el.h1}</h1>
                <p>{el.p}</p>
                <button>
                  {el.btn} <BiArrowToRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;

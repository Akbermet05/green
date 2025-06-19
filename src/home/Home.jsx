import React from "react";
import HomeBaner from "./HomeBaner";
import ListPlants from "./ListPlants";
import SideBar from "./SideBar";
import Plants from "./Plants";
import BlogPosts from "./BlogPosts";

const Home = () => {
  return (
    <div>
      <HomeBaner />
      <div
        className="container"
        style={{
          display: "flex",
          paddingBlock: "50px",
        }}
      >
        <SideBar />
        <ListPlants />
      </div>
      {/* <Plants /> */}
      {/* <BlogPosts /> */}
    </div>
  );
};

export default Home;

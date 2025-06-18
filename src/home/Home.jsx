import React from "react";
import HomeBaner from "./HomeBaner";
import ListPlants from "./ListPlants";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      {/* <HomeBaner /> */}
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
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import MainRoutes from "../../routes/MainRoutes";
import SideBar from "../../home/SideBar";
const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        {/* <MainRoutes /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;

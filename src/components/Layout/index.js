import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main>
        <div className="container">{children}</div>
      </main>
    </React.Fragment>
  );
};

export default Layout;

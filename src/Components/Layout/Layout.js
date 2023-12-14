import React, { Fragment } from "react";
import Navbars from "../Nav/Navbar";
import { Outlet } from "react-router-dom";
import Foooter from "../Footer/Footer";

function Layout() {
  return (
    <Fragment>
      <Navbars />
      <main>
        <Outlet />
      </main>

      <Foooter />
    </Fragment>
  );
}

export default Layout;

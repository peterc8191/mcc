import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./nav-bar";
import Footer from "./footer";

function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

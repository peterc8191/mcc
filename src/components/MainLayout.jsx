import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useScrollReveal from "../hooks/useScrollReveal";

export default function MainLayout() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <>
      <Header />
      <main className="app-main">
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

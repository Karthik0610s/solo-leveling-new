import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  return (
    <div className="app-layout">

      {/* SIDEBAR LEFT */}
      
      {/* RIGHT CONTENT */}
      <div className="main-content">

        {/* HEADER ONLY ONCE */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="page-content">
          <Outlet />
        </div>

        {/* FOOTER ONLY ONCE */}
        <Footer />

      </div>
    </div>
  );
}

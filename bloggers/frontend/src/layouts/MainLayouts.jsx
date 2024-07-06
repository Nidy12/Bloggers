import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayouts = () => {
  return (
    <>
      <NavBar></NavBar>
      <ToastContainer />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayouts;

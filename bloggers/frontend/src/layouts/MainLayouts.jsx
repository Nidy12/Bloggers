import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayouts;

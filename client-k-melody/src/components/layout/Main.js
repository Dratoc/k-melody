
import { useLocation } from "react-router-dom";
import Sidenav from "../sidenav/Sidenav";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Main({ children }) {

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");
  
  return (
    <>
      <Sidenav></Sidenav>
      {pathname}
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
    
  );
}

export default Main;

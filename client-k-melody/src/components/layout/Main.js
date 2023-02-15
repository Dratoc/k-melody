
import { useLocation } from "react-router-dom";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";

function Main({ children }) {

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  return (
    <div>
      <Sidenav></Sidenav>
      {pathname}
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
    
  );
}

export default Main;

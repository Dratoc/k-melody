import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import './Sidenav.scss';

function Sidenav() {
  return (
    <div className="content__sidenav">
      <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/filterbreed">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="content__buttons-sidenav">
        <Button text='Sign In' type='primary' ></Button>
        <Button text='Sign Up' type='secundary' ></Button>
      </div>
    </header>
    </div>
  );
}

export default Sidenav;

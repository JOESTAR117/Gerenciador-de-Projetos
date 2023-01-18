import { Link } from "react-router-dom";
import logo from "../../../images/costs_logo.png";
import { Cont } from "../Container/ContainerStyled";
import { Nav } from "./NavbarStyled";

function Navbar() {
  return (
    <Nav>
      <Cont>
        <Link to="/">
          <img src={logo} alt="Logo jojo coin" />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/projects">Projetos</Link>
          </li>
          <li className="item">
            <Link to="/company">Empresa</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Cont>
    </Nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/bio_logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Bio" />
        </Link>  
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/"><h2>Home</h2></Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects"><h2>Projetos</h2></Link>
          </li>
          <li className={styles.item}>
            <Link to="/company"><h2>Empresa</h2></Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact"><h2>Contato</h2></Link>
          </li> 
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;

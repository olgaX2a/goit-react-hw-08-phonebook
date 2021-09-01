import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={styles.Navigation}>
      <div className={styles.NavigationMenu}>
        <NavLink className={styles.NavigationLink} to="/">
          <Button variant="contained" color="primary">
            home
          </Button>
        </NavLink>
        <NavLink className={styles.NavigationLink} to="/contacts">
          <Button variant="contained" color="primary">
            contacts
          </Button>
        </NavLink>
      </div>
      <div className={styles.NavigationAuth}>
        <NavLink className={styles.NavigationLink} to="/login">
          <Button variant="contained" color="primary">
            login
          </Button>
        </NavLink>
        <NavLink className={styles.NavigationLink} to="/register">
          <Button variant="contained" color="primary">
            register
          </Button>
        </NavLink>
      </div>
    </header>
  );
}

export default Navigation;

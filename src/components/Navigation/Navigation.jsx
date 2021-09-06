import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./Navigation.module.css";

import UserMenu from "../UserMenu/UserMenu";

import { useSelector, useDispatch } from "react-redux";
import { getLoggedIn, getLoggedEmail } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";

function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);
  const loggedEmail = useSelector(getLoggedEmail);

  return (
    <header className={styles.Navigation}>
      <div className={styles.NavigationMenu}>
        <NavLink className={styles.NavigationLink} to="/">
          <Button variant="contained" color="primary">
            home
          </Button>
        </NavLink>
        {isLoggedIn && (
          <NavLink className={styles.NavigationLink} to="/contacts">
            <Button variant="contained" color="primary">
              contacts
            </Button>
          </NavLink>
        )}
      </div>

      {isLoggedIn ? (
        <div className={styles.NavigationAuth}>
          <UserMenu email={loggedEmail} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </Button>
        </div>
      ) : (
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
      )}
    </header>
  );
}

export default Navigation;

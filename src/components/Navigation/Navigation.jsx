import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/contacts">contacts</NavLink>
      </div>
      <div>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/register">register</NavLink>
      </div>
    </header>
  );
}

export default Navigation;

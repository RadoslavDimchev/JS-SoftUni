import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = () => {
  const setNavStyle = ({ isActive }) => {
    return isActive
      ? styles['active-link']
      : null;
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={setNavStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={setNavStyle} >About</NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={setNavStyle} >Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/pricing/premium" className={setNavStyle} >Premium Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/people" className={setNavStyle} >People</NavLink>
        </li>
        <li>
          <NavLink to="/owen-lars" className={setNavStyle} >Owen Lars</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
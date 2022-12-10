import "./index.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Logo from "../../ContentWrapper/Logo";
import MobileMenu from "../../ContentWrapper/MobileMenu";
import AppContext from "../../../Context/AppContext";
import Icons from "../Icons";

const Menu = () => {
  const { openMobile } = useContext(AppContext);

  return (
    <>
      <div className="nav_menu">
        {openMobile ? (
          <>
            <div className="top_mobile_nav">
              <Logo />
              <MobileMenu />
            </div>
          </>
        ) : (
          ""
        )}

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="../projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="../contact">Contact</NavLink>
          </li>
        </ul>

        {openMobile ? (
          <>
            <div className="bottom_mobile_nav">
              <Icons />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Menu;

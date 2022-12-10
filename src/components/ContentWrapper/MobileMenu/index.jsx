import "./index.scss";
import { useContext } from "react";
import AppContext from "../../../Context/AppContext";

const MobileMenu = () => {
  const { openMobile, toggleMobile } = useContext(AppContext);

  return (
    <>
      <div className="mobile_menu_wrapper">
        <div className="mobile_toggle_wrapper" onClick={toggleMobile}>
          <div
            className={openMobile ? "mobile_toggle active" : "mobile_toggle"}
          >
            <div className="top_bar"></div>
            <div className="middle_bar"></div>
            <div className="bottom_bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

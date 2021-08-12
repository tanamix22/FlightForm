import "./Sidebar.scss";
import logo from "../../assets/airplane.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHome, faPlane } from "@fortawesome/free-solid-svg-icons";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt={logo} />
          <h1>FlightForm</h1>
        </div>
        <FontAwesomeIcon
          className="navbar__icon-times"
          icon={faTimes}
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></FontAwesomeIcon>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active active_menu_link">
          <NavLink to="/" exact={true}>
            <FontAwesomeIcon
              className="navbar__icon-company"
              icon={faHome}
            ></FontAwesomeIcon>
            Home
          </NavLink>
        </div>
        <h2>Agencies</h2>

        <ul>
          <li className="sidebar__link">
            <FontAwesomeIcon
              className="navbar__icon-company"
              icon={faPlane}
            ></FontAwesomeIcon>
            <NavLink to="/1" exact={true}>
              Company 1
            </NavLink>
          </li>

          <li className="sidebar__link">
            <FontAwesomeIcon
              className="navbar__icon-company"
              icon={faPlane}
            ></FontAwesomeIcon>
            Company 2
          </li>
          <li className="sidebar__link">
            <FontAwesomeIcon
              className="navbar__icon-company"
              icon={faPlane}
            ></FontAwesomeIcon>
            Company 3
          </li>
          <li className="sidebar__link">
            <FontAwesomeIcon
              className="navbar__icon-company"
              icon={faPlane}
            ></FontAwesomeIcon>
            Company 4
          </li>
          <li className="sidebar__link">
            <FontAwesomeIcon
              className="navbar__icon-company"
              icon={faPlane}
            ></FontAwesomeIcon>
            Company 5
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

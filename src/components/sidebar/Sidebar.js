import "./Sidebar.scss";
import React, { useEffect, useState } from "react";
import logo from "../../assets/airplane.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlane } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import DataAgencie from "../../utils/dummyData.json";

export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [agencie, setAgencie] = useState([]);

  useEffect(() => {
    setAgencie(DataAgencie);
  }, []);

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
        <h2>Agencies</h2>

        <ul className="list">
          {agencie.map((item, key) => (
            <li className="sidebar__link" key={key}>
              <FontAwesomeIcon
                className="navbar__icon-company"
                icon={faPlane}
              ></FontAwesomeIcon>
              <NavLink className="Navlink" to={"/" + item.id} exact={true}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

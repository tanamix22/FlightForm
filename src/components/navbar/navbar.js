import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar__icon" onClick={() => openSidebar()}>
        <FontAwesomeIcon
          className="navbar__icon-bars"
          icon={faBars}
        ></FontAwesomeIcon>
      </div>
      <div className="navbar__left">
        <a href="#" className="active_link">
          Agencies
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <FontAwesomeIcon
            className="navbar__right-icon"
            icon={faSearch}
          ></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="navbar__right-icon"
            icon={faClock}
          ></FontAwesomeIcon>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

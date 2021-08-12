import "./Sidebar.scss";
import logo from "../../assets/airplane.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHome, faPlane } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = ({sidebarOpen, closeSidebar}) => {

    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt={logo} />
                    <h1>FlightForm</h1>
                </div>
                <FontAwesomeIcon className="navbar__icon-times" icon={faTimes}
                    id="sidebarIcon" onClick={() => closeSidebar()}
                ></FontAwesomeIcon>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faHome}></FontAwesomeIcon>
                <a href="#">Dashboard</a>
                </div>
                <h2>Agencies</h2>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 1</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 2</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 3</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 4</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 5</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 6</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 7</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 8</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 9</a>
                </div>
                <div className="sidebar__link">
                <FontAwesomeIcon className="navbar__icon-company" icon={faPlane}></FontAwesomeIcon>
                <a href="#">Company 10</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

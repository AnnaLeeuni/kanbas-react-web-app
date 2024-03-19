import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { 
  FaTachometerAlt, 
  FaRegUserCircle, 
  FaBook, 
  FaRegCalendarAlt,
  FaUsers, // Assuming this for Groups
  FaInbox, // Assuming this for Inbox
  FaHistory,
  FaShareAlt, // Assuming this for Commons
  FaFilm,
  FaInfoCircle // Assuming this for Help
} from "react-icons/fa";

    
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Groups", icon: <FaUsers className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Commons", icon: <FaShareAlt className="fs-2" /> },
    { label: "Studio", icon: <FaFilm className="fs-2" /> },
    { label: "Help", icon: <FaInfoCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li><a href="http://northeastern.edu" style={{ fontSize: "50px", color: "red" }}>N</a></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
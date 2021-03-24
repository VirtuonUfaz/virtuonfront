import Logo from "assets/Icons/Logo.svg";
import Home from "assets/Icons/Home.svg";
import Campus from "assets/Icons/rooms.svg";
import Timetable from "assets/Icons/timetable.svg";
import Settings from "assets/Icons/Settings.svg";
import Tickets from "assets/Icons/tickets.svg";
import Server from "assets/Icons/server.svg";
import Blogs from "assets/Icons/blogs.svg";
import Members from "assets/Icons/members.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPoll } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import "./styles.scss";
const Sidebar = () => {
  return (
    <div className="side-nav bg-blue py-5">
      <div className="h-100 flex-column flex flex-jc-sb flex-ai-c">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="main-ul flex flex-column full-center pb-7 w-100 relative">
          <NavLink
            to="/home"
            activeClassName="active-link"
            className=" flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Home} alt="" />
            <p className="nav-text">Home</p>
          </NavLink>
          <NavLink
            to="/rooms"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Campus} alt="" />
            <p className="nav-text">Rooms</p>
          </NavLink>
          <NavLink
            to="/time-table"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Timetable} alt="" />
            <p className="nav-text">Time Table</p>
          </NavLink>
          <NavLink
            to="/tasks"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Server} alt="" />
            <p className="nav-text">Tasks</p>
          </NavLink>
          <NavLink
            to="/grades"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPoll} color="white" />
            <p className="nav-text">Grades</p>
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Blogs} alt="" />
            <p className="nav-text">Blog</p>
          </NavLink>
          <NavLink
            to="/archive"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Server} alt="" />
            <p className="nav-text">Archive</p>
          </NavLink>
          <NavLink
            to="/documents"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <FontAwesomeIcon icon={faFile} color="white" />
            <p className="nav-text">Documents</p>
          </NavLink>
        </ul>
        <div className="flex-column full-center gap-1 py-3 w-100 cursor-pointer">
          <img src={Settings} alt="" />
          <p className="nav-text">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

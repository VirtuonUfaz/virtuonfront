import Logo from "assets/Icons/Logo.svg";
import Home from "assets/Icons/Home.svg";
import Campus from "assets/Icons/rooms.svg";
import Timetable from "assets/Icons/timetable.svg";
import Settings from "assets/Icons/Settings.svg";
import Tickets from "assets/Icons/tickets.svg";
import Server from "assets/Icons/server.svg";
import Blogs from "assets/Icons/blogs.svg";
import Members from "assets/Icons/members.svg";

import { NavLink } from "react-router-dom";

import "./styles.scss";
const Sidebar = () => {
  return (
    <div className="side-nav bg-blue py-5">
      <div className="h-100 flex-column flex flex-jc-sb flex-ai-c">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="flex flex-column full-center pb-7 w-100 relative">
          <NavLink
            to="/home"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <ul className="sub-menue">
              <li className="p-4 bg-blue text-white text">Rooms</li>
              <li className="p-4 bg-blue text-white text">Timetable</li>
              <li className="p-4 bg-blue text-white text">Archive</li>
            </ul>
            <img src={Home} alt="" />
            <p className="nav-text">Home</p>
          </NavLink>
          <NavLink
            to="/rooms"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <ul className="sub-menue">
              <li className="p-4 bg-blue text-white text">Absence</li>
              <li className="p-4 bg-blue text-white text">Grades</li>
              <li className="p-4 bg-blue text-white text">Documents</li>
            </ul>
            <img src={Campus} alt="" />
            <p className="nav-text">Campus</p>
          </NavLink>
          <NavLink
            to="/t"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Timetable} alt="" />
            <p className="nav-text">Resources</p>
          </NavLink>
          <NavLink
            to="/t"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Server} alt="" />
            <p className="nav-text">Tasks</p>
          </NavLink>
          <NavLink
            to="/t"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Members} alt="" />
            <p className="nav-text">Members</p>
          </NavLink>
          <NavLink
            to="/t"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Blogs} alt="" />
            <p className="nav-text">Blog</p>
          </NavLink>
          <NavLink
            to="/t"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Server} alt="" />
            <p className="nav-text">Logs</p>
          </NavLink>
          <NavLink
            to="/t"
            activeClassName="active-link"
            className="flex-column full-center gap-1 py-3 w-100 cursor-pointer"
          >
            <img src={Tickets} alt="" />
            <p className="nav-text">Tickets</p>
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

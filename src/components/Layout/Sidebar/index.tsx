import React from "react";
import Logo from "assets/Icons/Logo.svg";
import Home from "assets/Icons/Home.svg";
import Campus from "assets/Icons/rooms.svg";
import Timetable from "assets/Icons/timetable.svg";
import Settings from "assets/Icons/Settings.svg";
import Tickets from "assets/Icons/tickets.svg";
import Server from "assets/Icons/server.svg";
import Blogs from "assets/Icons/blogs.svg";
import Members from "assets/Icons/members.svg";
import "./styles.scss";
const Sidebar = () => {
  return (
    <div className="side-nav bg-blue py-5">
      <div className="h-100 flex-column flex flex-jc-sb flex-ai-c">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="flex flex-column full-center  pb-7 w-100">
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Home} alt="" />
            <p className="nav-text">Home</p>
          </li>
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Campus} alt="" />
            <p className="nav-text">Campus</p>
          </li>
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Timetable} alt="" />
            <p className="nav-text">Resources</p>
          </li>
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Server} alt="" />
            <p className="nav-text">Tasks</p>
          </li>
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Members} alt="" />
            <p className="nav-text">Members</p>
          </li>
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Blogs} alt="" />
            <p className="nav-text">Blog</p>
          </li>
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Server} alt="" />
            <p className="nav-text">Logs</p>
          </li>
          <li className="flex-column full-center gap-1 py-3 w-100">
            <img src={Tickets} alt="" />
            <p className="nav-text">Tickets</p>
          </li>
        </ul>
        <div className="flex-column full-center gap-1 py-3 w-100">
          <img src={Settings} alt="" />
          <p className="nav-text">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Notifications from "assets/notifications.svg";
import Logout from "../../../assets/logout.svg"
import "./styles.scss";

const Header = () => {
  let MonthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let today = new Date();
  let date =
    today.getDate() +
    " " +
    MonthsEn[today.getMonth()] +
    " " +
    today.getFullYear() +
    "-" +
    today.getHours() +
    ":" +
    today.getMinutes();

  return (
    <nav>
      <div className="flex flex-ai-c ">
        <div className="flex-4 flex flex-jc-sb flex-ai-c border-right px-7 py-3">
          <div className="text text-md bold pl-8">{date}</div>
          <div className="flex ">
            <div className="mr-4">
              <p className="text bold pb-1 text-right">Cody Simmmons</p>
              <p className="text text-xs text-gray">
                Student affairs specialist
              </p>
            </div>
            <div className="image-wrapper">
              <img src="user.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-7 px-7 py-5">
          <img src={Notifications} alt="" className="cursor-pointer" />
          <img src={Logout} alt="" className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

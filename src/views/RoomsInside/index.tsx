import { useLocation } from "react-router-dom";
import ChatWidget from "./ChatBox";
import Vector from "assets/Icons/Vector.svg";
import "./style.scss";

const RoomsInside = () => {
  const location = useLocation();

  return (
    <div className="py-10">
      <h1 className="md-header">Rooms</h1>
      <div className="flex flex-m gap-7 my-8">
        <div className="border rounded flex-2 flex-as-s">
          <div
            className={`flex flex-jc-sb pt-5 pb-5 px-8 bg-${location.detail.card.color}`}
          >
            <div className="md-header text-white">
              {location.detail.card.room}
            </div>
            <div className="text text-white text-sm">
              {location.detail.card.type}
            </div>
          </div>
          <div className="border rounded flex-1 flex-as-s">
            <div className="flex flex-jc-sb mb-2 pt-8 px-8">
              <div className="text bold text-sm text-light-gray mb-5">
                Event
              </div>
              <div className="text bold text-sm text-light-gray mb-5">
                Subject
              </div>
              <div className="text bold text-sm text-light-gray mb-5">
                Teacher
              </div>
              <div className="text bold text-sm text-light-gray mb-5">
                Group
              </div>
              <div className="text bold text-sm text-light-gray mb-5">Time</div>
            </div>
          </div>
          <div className="border rounded flex-1 flex-as-s">
            {location.detail.card.infos.map((info, key) => (
              <div className="flex flex-jc-sb mb-2 pt-8 px-8" key={key}>
                <div className="text bold text-sm text-black mb-5">
                  {info.info}
                </div>
                <div className="text bold text-sm text-black mb-5">
                  {info.subject}
                </div>
                <div className="text bold text-sm text-black mb-5">
                  {info.teacher}
                </div>
                <div className="text bold text-sm text-black mb-5">
                  {info.group}
                </div>
                <div className="text bold text-sm text-black mb-5 bg-cyan p-1">
                  {info.time}
                </div>
              </div>
            ))}
          </div>

          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            allow="autoplay; encrypted-media"
            title="video"
            className="frame"
          />
        </div>

        <div className="border rounded flex-1 flex-as-s">
          <div className="bg-vlg pb-5">
            <div className="flex flex-jc-sb mb-2 pt-8 px-8">
              <div className="sm-header">
                {location.detail.card.infos[0].subject}
              </div>
              <img src={Vector} alt="" className="cursor-pointer" />
            </div>
            <div className="text text-sm text-gray px-8">Group chat</div>
          </div>
          <ChatWidget />
        </div>
      </div>
    </div>
  );
};

export default RoomsInside;

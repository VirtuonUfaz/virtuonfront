import "./style.scss"
import Vector from "assets/Icons/Vector.svg";
import { useLocation } from "react-router-dom";
import ChatWidget from "./ChatBox"

const RoomsInside = (props) => {

  const location = useLocation();

  console.log(location)

  return (
    <div className="py-10">
      <h1 className="md-header">Rooms</h1>

      {/* <div className="flex gap-7 my-8">
        <div className="border flex-1  rounded py-6 px-8 text-center">
          <p className="text bold text-md text-gray mb-5">Hours on lectures</p>
          <p className="text bold text-blue text-xxl text-secondary-font">
            120
          </p>
        </div>
        <div className="border flex-1  rounded py-6 px-8 text-center">
          <p className="text bold text-md text-gray mb-5">Lectures left</p>
          <p className="text bold text-blue text-xxl">16</p>
        </div>
        <div className="border flex-1  rounded py-6 px-8 text-center">
          <p className="text bold text-md text-gray mb-5">Average mark</p>
          <p className="text bold text-blue text-xxl">13.35</p>
        </div>
        <div className="border flex-1  rounded py-6 px-7 text-center">
          <p className="text bold text-md text-gray mb-5">Finished Homeworks</p>
          <p className="text bold text-blue text-xxl">83%</p>
        </div>
      </div> */}


      <div className="flex flex-m gap-7 my-8">
        <div className="border rounded flex-2 flex-as-s">
          <div className={`flex flex-jc-sb pt-5 pb-5 px-8 bg-${location.detail.card.color}`}>
            <div className="md-header text-white">{location.detail.card.room}</div>
            <div className="text text-white text-sm">{location.detail.card.type}</div>
          </div>
        <div className="border rounded flex-1 flex-as-s">
          <div className="flex flex-jc-sb mb-2 pt-8 px-8">
            <div className="text bold text-sm text-light-gray mb-5">Event</div>
            <div className="text bold text-sm text-light-gray mb-5">Subject</div>
            <div className="text bold text-sm text-light-gray mb-5">Teacher</div>
            <div className="text bold text-sm text-light-gray mb-5">Group</div>
            <div className="text bold text-sm text-light-gray mb-5">Time</div>
          </div>
        </div>
        {/* <div className="border rounded flex-1 flex-as-s">
          <div className="flex flex-jc-sb mb-2 pt-8 px-8">
            <div className="text bold text-sm text-black mb-5">{location.detail.card.infos[0].info}</div>
            <div className="text bold text-sm text-black mb-5">{location.detail.card.infos[0].subject}</div>
            <div className="text bold text-sm text-black mb-5">{location.detail.card.infos[0].teacher}</div>
            <div className="text bold text-sm text-black mb-5">{location.detail.card.infos[0].group}</div>
            <div className="text bold text-sm text-black mb-5 bg-cyan p-1">{location.detail.card.infos[0].time}</div>
          </div>
        </div> */}

        <div className="border rounded flex-1 flex-as-s">
          {location.detail.card.infos.map((info, key) => (
            <div className="flex flex-jc-sb mb-2 pt-8 px-8" key={key}>
              <div className="text bold text-sm text-black mb-5">{info.info}</div>
              <div className="text bold text-sm text-black mb-5">{info.subject}</div>
              <div className="text bold text-sm text-black mb-5">{info.teacher}</div>
              <div className="text bold text-sm text-black mb-5">{info.group}</div>
              <div className="text bold text-sm text-black mb-5 bg-cyan p-1">{info.time}</div>
            </div>
          ))}
        </div>


        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        allow='autoplay; encrypted-media'
        title='video'
        className="frame"
        />

        </div>


        <div className="border rounded flex-1 flex-as-s">
          <div className="bg-vlg pb-5">
            <div className="flex flex-jc-sb mb-2 pt-8 px-8">
                <div className="sm-header">{location.detail.card.infos[0].subject}</div>
                <img src={Vector} alt="" className="cursor-pointer" />
            </div>
            <div className="text text-sm text-gray px-8">
                Group chat
            </div>
          </div>
          <ChatWidget/>
        </div>

      </div>
    </div>
  );
};

export default RoomsInside;

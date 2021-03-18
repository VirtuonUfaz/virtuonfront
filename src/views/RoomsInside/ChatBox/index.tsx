import react, {Component} from "react"
import Plus from "assets/Icons/circled_plus.svg";
import Send from "assets/Icons/send.svg";
import "./style.scss"

class ChatBox extends Component {

  constructor(props) {
    super(props);
    this.state = {chat: []};
  }

  render(){
    return (
        <div>
          <div className="flex flex-column mt-9 chatbox">
              <div className="received ml-4">
                  <p className="text px-6 py-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                  <p className="text pl-6 pb-3 text-xs text-dark-gray">10:11 AM Nigar Yusifzade</p>
              </div>
              <div className="sent ml-10 mt-4">
                  <p className="text px-6 py-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                  <p className="text pl-6 pb-3 text-xs text-dark-gray">10:12 AM Anar Mammadov</p>
              </div>
              <div className="received ml-4 mt-4">
                  <p className="text px-6 py-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                  <p className="text pl-6 pb-3 text-xs text-dark-gray">10:11 AM Nigar Yusifzade</p>
              </div>
          </div>

          <div className="flex p-3">
            <img src={Plus} alt="" className="cursor-pointer flex-1 mb-2 plus"/>
            <input type="text" placeholder="Type a message here..." className="flex-4"></input>
            <img src={Send} alt="" className="cursor-pointer flex-1 bg-light-gray send"/>
          </div>
        </div>
    )
  }
};

export default ChatBox;
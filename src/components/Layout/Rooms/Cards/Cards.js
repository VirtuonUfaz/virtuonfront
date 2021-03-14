import React from "react"
import "./Cards.css"


const cards = (props) => {

    let infos = null;
    
    infos = (
        <div>
            {props.infos.map(i => {
                return (
                    <div>
                        <p className="Time">{i.time}</p>
                        <p className="Info">{i.info}</p>  
                    </div>
                )
            })}
        </div>
    )

    const style = {
        position: 'absolute',
        width: '160px',
        height: '40px',
        background: props.color,
        borderRadius: '2px 2px 0px 0px'
    }

    return (
        <div className="Card">
            <div style={style}>
                <p className="Room_number">{props.room}</p>
                <p className="Room_type">{props.type}</p>
            </div>
            {infos}
        </div>
    )
}

export default cards
import "./styles.scss";

const cards = (props) => {
  return (
    <div className="card border rounded mt-10">
      <div className={`flex flex-jc-sb bg-${props.color} p-2`}>
        <p className="text text-md bold text-white">{props.room}</p>
        <p className="text text-xs text-white">{props.type}</p>
      </div>
      <div className="p-2">
        {props.infos.map((i, k) => (
          <div key={k} className="flex flex-jc-sb mb-3">
            <p className="text text-xs text-gray">{i.time}</p>
            <p className="text text-xs ">{i.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cards;

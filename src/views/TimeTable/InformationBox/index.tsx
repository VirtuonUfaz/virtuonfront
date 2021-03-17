const InformationBox = ({ data }) => {
  return (
    <div className="info-box rounded flex flex-column p-4 gap-2">
      <p className="text">{data.room}</p>
      <p className="text">{data.lesson}</p>
      <p className="text">{data.teacher}</p>
    </div>
  );
};

export default InformationBox;

import Table from "./Table";
import "./styles.scss";
const Timetable = () => {
  return (
    <div className="py-10">
      <div className="flex flex-jc-sb mb-5">
        <h1 className="md-header">Timetable</h1>
        <div className="flex gap-4">
          <select className="form-input form-w-50">
            <option value="0">All courses</option>
            <option value="1">OOP</option>
            <option value="2">AI</option>
          </select>
          <select className="form-input form-w-50">
            <option value="0">This week</option>
            <option value="1">Week 2</option>
            <option value="2">Week 3</option>
          </select>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Timetable;

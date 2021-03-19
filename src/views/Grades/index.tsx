import "./styles.scss";

const Grades = () => {
  let gradeList = [
    {
      course: "Vector analysis",
      credit: "3",
      dueDate: "24.04.20",
      status: "Graded",
      grade: "13",
    },
    {
      course: "Vector analysis",
      credit: "5",
      dueDate: "24.04.20",
      status: "Graded",
      grade: "86",
    },
    {
      course: "Vector analysis",
      credit: "4",
      dueDate: "14.03.20",
      status: "Unopened",
      grade: "",
    },
    {
      course: "Vector analysis",
      credit: "5",
      dueDate: "25.04.20",
      status: "Submitted",
      grade: "54",
    },
  ];

  const yearOptions = [
    {
      key: "2020-2021",
      text: "2020-2021",
      value: "2020-2021",
    },
    {
      key: "2019-2020",
      text: "2019-2020",
      value: "2019-2020",
    },
    {
      key: "2018-2019",
      text: "2018-2019",
      value: "2018-2019",
    },
    {
      key: "2017-2018",
      text: "2017-2018",
      value: "2017-2018",
    },
    {
      key: "2016-2017",
      text: "2016-2017",
      value: "2016-2017",
    },
  ];

  const semesterOptions = [
    {
      key: "1 semester",
      text: "1 semester",
      value: "1 semester",
    },
    {
      key: "2 semester",
      text: "2 semester",
      value: "2 semester",
    },
    {
      key: "3 semester",
      text: "3 semester",
      value: "3 semester",
    },
    {
      key: "4 semester",
      text: "4 semester",
      value: "4 semester",
    },
  ];

  const subjectOptions = [
    {
      key: "Mathematics",
      text: "Mathematics",
      value: "Mathematics",
    },
    {
      key: "Mathematics",
      text: "Mathematics",
      value: "Mathematics",
    },
  ];

  const getColor = (grade) => {
    if (grade === "") return "light-gray";
    else if (grade < 50) return "red";
    else if (grade < 80) return "yellow";
    else return "green";
  };

  return (
    <div className="py-10 grades">
      <h1 className="md-header">Grades</h1>
      <div className="flex flex-jc-sb  my-8">
        <div className="flex flex-ai-c">
          <p className="text bold text-sm text-blue mr-4 ">Academic year</p>
          <select name="" id="" className="form-input text-gray">
            {yearOptions.map((year, index) => (
              <option key={index} value={year.value}>
                {year.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-ai-c">
          <p className="text bold text-sm text-blue mr-4 ">Semester</p>
          <select name="" id="" className="text-light-gray form-input ">
            {semesterOptions.map((semesterOption, index) => (
              <option key={index} value={semesterOption.value}>
                {semesterOption.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-ai-c">
          <p className="text bold text-sm text-blue mr-4 ">Subject</p>
          <select name="" id="" className="text-light-gray form-input">
            {subjectOptions.map((subjectOption, index) => (
              <option key={index} value={subjectOption.value}>
                {subjectOption.text}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-8 my-8">
        <div className="border rounded flex-1 flex-as-s">
          <div className="flex flex-jc-sb mb-2 pt-8 px-8">
            <div className="text bold text-md text-gray mb-5">Course</div>
            <div className="text bold text-md text-gray mb-5">Credit</div>
            <div className="text bold text-md text-gray mb-5">Due date</div>
            <div className="text bold text-md text-gray mb-5">Status</div>
            <div className="text bold text-md text-gray mb-5">Grades</div>
          </div>

          <div className="flex flex-column mt-9">
            {gradeList.map((grades, index) => (
              <div
                key={index}
                className="flex flex-jc-sb border-bottom px-8 py-4"
              >
                <p className="text">{grades.course}</p>
                <p className="text">{grades.credit}</p>
                <p className="text">{grades.dueDate}</p>
                <p className="text">{grades.status}</p>
                <p
                  className={`text grade text-white py-1 bg-${getColor(
                    grades.grade
                  )}`}
                >
                  {grades.grade}/100
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;

import { useState, useEffect } from "react";
import "./style.scss";

const Documents = () => {
  const [select_value, setSelect] = useState("2020-2021");
  const [print_value, setPrint] = useState("");
  const [docType, setDocType] = useState("");
  const [hasAccess, setAccess] = useState(true);

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

  return (
    <div className="py-10">
      <h1 className="md-header">Documents</h1>

      <div className="flex gap-7 my-8">
        <div className="border rounded flex-1 flex-as-s">
          <div className="text-md px-8 py-8">Select document type:</div>

          <div className="flex flex-column  px-14">
            <div className="flex py-1">
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="docType"
                  value="Tuition Certificate"
                  onChange={(e) => setDocType(e.target.value)}
                />
                <span className="custom-checkbox"></span>
              </label>
              <p className=" ml-4 text">School Certificate</p>
            </div>

            <div className="flex py-1">
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="docType"
                  value="Registration cancellation Certificate"
                  onChange={(e) => setDocType(e.target.value)}
                />
                <span className="custom-checkbox"></span>
              </label>
              <p className=" ml-4 text">
                Registration cancellation Certificate
              </p>
            </div>

            <div className="flex py-1">
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="docType"
                  value="Tuition fee"
                  onChange={(e) => setDocType(e.target.value)}
                />
                <span className="custom-checkbox"></span>
              </label>
              <p className=" ml-4 text">
                Payment certificate and account situation
              </p>
            </div>

            <div className="flex py-1">
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="docType"
                  value="Summary of anonymity numbers"
                  onChange={(e) => setDocType(e.target.value)}
                />
                <span className="custom-checkbox"></span>
              </label>
              <p className=" ml-4 text">Summary of anonymity numbers</p>
            </div>
          </div>

          <div className="text-md px-8 py-4 pt-10">Select academic year:</div>

          <div className="flex py-4 px-8 ml-5">
            <select
              name=""
              id=""
              className="text-light-gray form-input form-w-100"
              onChange={(e) => setSelect(e.target.value)}
            >
              {yearOptions.map((yearOptions, index) => (
                <option key={index} value={yearOptions.value}>
                  {yearOptions.text}
                </option>
              ))}
            </select>
            <input
              type="submit"
              className="submit-button ml-4 "
              value="Okay"
              onClick={() => setPrint(select_value)}
            />
          </div>

          <div className="text-md px-8 py-4 pt-10">You have selected:</div>

          <div className="px-14 py-2 pb-10">
            <div className="sm-header py-4 italic">
              {docType} - {print_value}
            </div>
            <div>
              <input
                type="submit"
                className={`confirm-button bg-${
                  hasAccess ? "green" : "light-gray"
                }`}
                value="To confirm"
              />
              <input
                type="submit"
                className="cancel-button ml-4"
                value="To cancel"
              />
            </div>
            {hasAccess ? (
              ""
            ) : (
              <div className="text-sm py-4">
                You have no access to this file, you can request access to this
                file
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;

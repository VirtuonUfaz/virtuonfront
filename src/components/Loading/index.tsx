import React from "react";
import { ClipLoader } from "react-spinners";
import "./styles.scss";
const Loading = () => {
  return (
    <div className="loading full-center">
      <ClipLoader loading />
    </div>
  );
};

export default Loading;

import React, { useEffect, useState, useContext } from "react";
import { VirtuonContext } from "../../helpers/context/context";
import { useForm } from "react-hook-form";

// style
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//image
import Background from "../../assets/Icons/background.svg";
import Logo from "../../assets/Icons/Logo.svg";
import { get, post } from "helpers/server";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const { setUser } = useContext(VirtuonContext);
  const [step, setStep] = useState("ID");
  const [ID, setID] = useState<string>("");
  const [OTP, setOTP] = useState<string>("");

  const submit = (data): Promise<any> => {
    console.log(data.id)
    if (step === "ID") {
      return post("/auth/check", { ID: ID }, "")
        .then((res) => console.log("res: ", res))
        .catch((err) => console.log("err: ", err));
    }else if(step === "OTP"){
      return post("/auth/login", { ID: ID, OTP: OTP }, "")
        .then((res) => console.log("res: ", res))
        .catch((err) => console.log("err: ", err));
    }
    return Promise.reject();
  };

  const renderIDInput = () => (
    <div>
      <label className="form-label login-form-label">
        Please Enter your ID number
      </label>
      <input
        type="text"
        name="id"
        onChange={val => setID(val.target.value)}
        placeholder="Your ID number"
        style={errors.value && { border: "1px solid #EB5757" }}
        className={[
          "form-input",
          errors.value ? "login-form-input-error" : "login-form-input",
        ]
          .join()
          .replace(",", " ")}
        ref={register({
          // required: {
          //   value: true,
          //   message: "An ID number is required, please enter your ID number",
          // },
        })}
      />
      <span className="login-error">{errors.id?.message}</span>
      <input
        type="submit"
        className="login-button"
        value="Submit"
        onClick={() => {}}
      />
    </div>
  );

  const renderOTPInput = () => (
    <div>
      <label className="form-label login-form-label">
        Please enter your one-time password from your e-mail
      </label>
      <input
        type="text"
        name="otp"
        onChange={val => setOTP(val.target.value)}
        placeholder="******"
        style={errors.value && { border: "1px solid #EB5757" }}
        className={[
          "form-input",
          errors.value ? "login-form-input-error" : "login-form-input",
        ]
          .join()
          .replace(",", " ")}
        ref={register({
          // required: {
          //   value: true,
          //   message: "An OTP is required, please enter your one-time password",
          // },
        })}
      />
      <span className="login-error">{errors.id?.message}</span>
      <input type="submit" className="login-button" value="Log in" />
    </div>
  );

  return (
    <main className="flex login-container">
      <div className="login-background">
        <h1 className="title">
          <img src={Logo} alt="" /> Virtuon
        </h1>
        <img src={Background} alt="" />
      </div>
      <div className="login-form">
        <h1 className="login-form-title">Login to your Virtual University</h1>
        <form
          onSubmit={handleSubmit((d) =>
            submit(d).then(() => step === "ID" && setStep("OTP"))
          )}
        >
          {step === "ID" ? renderIDInput() : renderOTPInput()}
        </form>
      </div>
    </main>
  );
};

export default Login;

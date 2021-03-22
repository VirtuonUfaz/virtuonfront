import { useState, useContext } from "react";
import { VirtuonContext } from "helpers/context/context";
import { useForm } from "react-hook-form";
import { post } from "helpers/server";
import { fetchUser } from "helpers/actions/auth";
import { useHistory } from "react-router-dom";
//image
import Background from "assets/Icons/background.svg";
import Logo from "assets/Icons/Logo.svg";

// style
import "./style.scss";

const Login = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm();
  const { setUser } = useContext(VirtuonContext);
  const [step, setStep] = useState("ID");
  const [ID, setID] = useState<string>("");
  const [OTP, setOTP] = useState<string>("");

  const onSubmit = (data) => {
    post("/auth/check", { ID: ID }, "")
      .then((res: any) => {
        if (res.data.status === 200) setStep("OTP");
      })
      .catch((err) => console.log("err: ", err));
  };
  const onSubmitOTP = (data) => {
    console.log(data);

    post("/auth/login", { ID: ID, OTP: OTP }, "")
      .then((res: any) => {
        if (res.data.status === 200) {
          localStorage.setItem("token", res?.data?.token);
          fetchUser()
            .then((user) => setUser(user))
            .finally(() => {
              history.push("/home");
            });
        }
      })
      .catch((err) => console.log("err: ", err));
  };

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
          onSubmit={handleSubmit(onSubmit)}
          className={step === "ID" ? "" : "hidden"}
        >
          <div>
            <label className="form-label login-form-label">
              Please Enter your ID number
            </label>
            <input
              type="text"
              name="id"
              onChange={(val) => setID(val.target.value)}
              placeholder="Your ID number"
              style={errors.value && { border: "1px solid #EB5757" }}
              className={[
                "form-input",
                errors.value ? "login-form-input-error" : "login-form-input",
              ]
                .join()
                .replace(",", " ")}
              ref={register({
                required: {
                  value: true,
                  message:
                    "An ID number is required, please enter your ID number",
                },
              })}
            />
            <span className="login-error">{errors.id?.message}</span>
            <input type="submit" className="login-button" value="Submit" />
          </div>
        </form>
        <form
          onSubmit={handleSubmit2(onSubmitOTP)}
          className={step === "ID" ? "hidden" : ""}
        >
          <div>
            <label className="form-label login-form-label">
              Please enter your one-time password from your e-mail
            </label>
            <input
              type="text"
              name="otp"
              onChange={(val) => setOTP(val.target.value)}
              placeholder="******"
              style={errors2.value && { border: "1px solid #EB5757" }}
              className={[
                "form-input",
                errors2.value ? "login-form-input-error" : "login-form-input",
              ]
                .join()
                .replace(",", " ")}
              ref={register2({
                required: {
                  value: true,
                  message: "An OTP  is required, please enter your OTP number",
                },
              })}
            />
            <span className="login-error">{errors2.otp?.message}</span>
            <input type="submit" className="login-button" value="Log in" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;

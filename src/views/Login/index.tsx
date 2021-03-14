import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import "./style.scss"

//image
import Background from "../../assets/Icons/background.svg";
import Logo from "../../assets/Icons/Logo.svg";


const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const submit = data => {}

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
          <form onSubmit={handleSubmit(d => console.log(d))}>
            <div>
              <label 
              className="form-label login-form-label">
                Please Enter your ID number
              </label>
              <input 
                  type="text"  
                  name="id" 
                  placeholder="Your ID number" 
                  style={errors.value && {border: "1px solid #EB5757"}}
                  className={["form-input", errors.value ? "login-form-input-error": "login-form-input"].join().replace(",", " ")}
                  ref={register({
                            required: {
                              value: true,
                              message: "An ID number is required, please enter your ID number",
                            },
                          })} />
              <span className="login-error">{errors.id?.message}</span>
              <input type="submit"  className="login-button" value="Get Started" />
            </div>
          </form>
      </div>
    </main>
  );
};

export default Login;

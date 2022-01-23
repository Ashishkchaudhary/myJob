import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/button/Button";
import InputField from "../components/inputField/InputField";
import Modal from "../components/modal/Modal";
import { loginHandler, onResetPassword } from "../api";
import { SIGN_UP } from "../constant";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [forgetPopup, setPopup] = useState(false);
  const [error, setError] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
    if (error)
    setError(false)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  const resetHandler = (event) => {
    setEmailReset(event.target.value)
  }

  const buttonHandler = () => {
    const params = {
      email: email,
      password: password
    };
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email) === false) {
      setError(true);
    } else {
      loginHandler(params)
    }
  }

  const submitHandler = () => {
    
    setPopup(false);
    const params = {
      email: emailReset,
    }
    onResetPassword(params);
  }

  return (
    <div className="container">
      {forgetPopup ? (
        <Modal>
          <h3>Forgot your password?</h3>
          <p>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
          <InputField value={emailReset} type="email" label="Email Address" handler={resetHandler} />
          <Button name="Submit" handler={submitHandler}/>
        </Modal>
        ):(
        <Modal>
          <div className="loginContainer">
            <h3>Login</h3>
            <InputField value={email} type="email" label="Email Address" handler={emailHandler} />
            <label className="label" onClick={()=>setPopup(true)}>forget your password</label>
            <InputField value={password} type="password" label="Password" handler={passwordHandler}/>
            {error && <label className="label error">Incorrect Email or password</label>}
            <Button name="Login" handler={buttonHandler}/>
            <div><p>New to MyJobs ? <span className="create" onClick={() => navigate(SIGN_UP)}>Create an account</span></p></div>
          </div>
        </Modal>)}
    </div>
  );
}

export default Login;

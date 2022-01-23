import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../components/inputField/InputField";
import Modal from "../components/modal/Modal";
import "./Signup.css";
import Button from "../components/button/Button";
import { registerHandler } from "../api";
import { LOGIN } from "../constant";

const Signup = () => {
  const navigate = useNavigate();
  const [signupFields, setSignupFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    skills: "",
    userRole: 0
  })
  const [error, setError] = useState(false);
  
  const onRegister = () => {
    const params = signupFields;
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (signupFields.email && signupFields.name && signupFields.password && signupFields.confirmPassword && signupFields.skills && regex.test(signupFields.email) === true) {
      registerHandler(params);
    } else {
      setError(true);
    }
  }

  const inputFieldhandler = (event) => {
    setSignupFields({...signupFields, [event.target.name]: event.target.value})
  }

  return (
    <div className="container">
      <Modal>
        <div className="loginContainer">
          <h3>Signup</h3>
          <div className="subContainer">
          <InputField name="name" type="text" label="Full Name" handler={inputFieldhandler} />
          {(!signupFields.name.length && error) && <label className="label error">The field is mandatory</label>}
          </div>
          <div className="subContainer">
          <InputField name="email" type="email" label="Email Address" handler={inputFieldhandler} />
          {(error) && <label className="label error">Invalid email address</label>}
          </div>
          <div className="pasworddiv">
            <div >
            <InputField name="password" type="password" label="Password" handler={inputFieldhandler}/>
            </div>
            <div >
            <InputField name="confirmPassword" type="password" label="Confirm Password" handler={inputFieldhandler}/>
            {(!signupFields.password.length && error) && <label className="label error">The field is mandatory</label>}
            </div>
          </div>
          <div className="subContainer">
          <InputField name="skills" type="text" label="Skills" handler={inputFieldhandler} />
          </div>
          <Button name="Sign Up" handler={onRegister}/>
          <div><p>Have an account ? <span className="create" onClick={() => navigate(LOGIN)}>Login</span></p></div>
        </div>
      </Modal>
    </div>
  );
}

export default Signup
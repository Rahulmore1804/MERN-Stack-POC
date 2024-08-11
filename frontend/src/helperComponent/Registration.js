import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import {
  checkFirstname,
  checkPasswordValidity,
  handleCheckEmail,
} from "../utils/Validation/Validation";
import axios from "axios";
function Registration() {
  const [fisrtNameErrorType, setfisrtNameErrorType] = useState(null);
  const [passwordErrorType, setpasswordErrorType] = useState(null);
  const [emailErrorType, setEmailErrorType] = useState(null);
  const [errnameL, seterrnameL] = useState(false);
  const [errpass, seterrpass] = useState(false);
  const [errEmail, seterrEmail] = useState(false);
  // const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const handlechange = (event) => {
    setname(event.target.value);
    seterrnameL(false);
  };
  const handlechange1 = (event) => {
    setpassword(event.target.value);
    seterrpass(false);
  };
  const handlechange2 = (event) => {
    setEmail(event.target.value);
    seterrEmail(false);
  };
  const navigate = useNavigate();

  const save = async () => {
    const isValid = checkFirstname(name, setfisrtNameErrorType);
    const isValid1 = checkPasswordValidity(password, setpasswordErrorType);
    const isValid3 = handleCheckEmail(email, setEmailErrorType);
    console.log("first");
    if (isValid === false) {
      seterrnameL(true);
    }
    if (isValid1 === false) {
      seterrpass(true);
    }
    if (isValid3 === false) {
      seterrEmail(true);
    }
    if (isValid1 && isValid3 && isValid) {
      axios
        .post("http://localhost:3001/saveAuthUser", {
          F1: email,
          F2: password,
          F3: name,
        })
        .then((res) => {
          if (res.data.message === "saved") {
            console.log("done");
            console.log("res.token", res.data.token);
            localStorage.setItem("myKey", res.data.token);
          }
        });
    }
  };
  return (
    <div>
      <TextField
        value={name}
        onChange={handlechange}
        id="outlined-name"
        label="Name"
        variant="outlined"
      />
      <button
        onClick={() => {
          const myValue = localStorage.getItem("myKey");
          console.log("myValue", myValue);
        }}
      >
        show jwt tokwen
      </button>
      <br />
      {errnameL && <p style={{ color: "red" }}>{fisrtNameErrorType}</p>}
      <br />
      {errnameL && <p style={{ color: "red" }}>{fisrtNameErrorType}</p>}
      <TextField
        value={password}
        onChange={handlechange1}
        id="outlined-name"
        label="password"
        variant="outlined"
      />{" "}
      <br />
      <br />
      <TextField
        value={email}
        onChange={handlechange2}
        id="outlined-name"
        label="Email"
        variant="outlined"
      />{" "}
      <br />
      {errEmail && <p style={{ color: "red" }}>{emailErrorType}</p>}
      <br />
      {errpass && <p style={{ color: "red" }}>{passwordErrorType}</p>}
      <br />
      <button onClick={() => navigate("/home")}>landing page</button>
      <br />
      <button onClick={() => save()}>save</button>
    </div>
  );
}

export default Registration;


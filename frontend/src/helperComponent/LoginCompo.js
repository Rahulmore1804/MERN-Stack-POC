import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import axios from "axios";
import {
  checkPasswordValidity,
  handleCheckEmail,
} from "../utils/Validation/Validation";

function Login() {
  const [passwordErrorType, setpasswordErrorType] = useState(null);
  const [emailErrorType, setEmailErrorType] = useState(null);
  const [errpass, seterrpass] = useState(false);
  const [errEmail, seterrEmail] = useState(false);
  const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
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
    const isValid1 = checkPasswordValidity(password, setpasswordErrorType);
    const isValid3 = handleCheckEmail(email, setEmailErrorType);
    if (isValid1 === false) {
      seterrpass(true);
    }
    if (isValid3 === false) {
      seterrEmail(true);
    }

    if (isValid1 && isValid3) {
      axios
        .post("http://localhost:3001/login", {
          F1: email,
          F2: password,
        })
        .then((res) => {
          if (res.data.message === "saved") {
          }
        });
    }
  };
  return (
    <div>
      <br />
      <br />
      <TextField
        value={email}
        onChange={handlechange2}
        id="outlined-name"
        label="Email"
        variant="outlined"
      />
      <br />
      {errEmail && <p style={{ color: "red" }}>{emailErrorType}</p>}
      <br />
      <TextField
        value={password}
        onChange={handlechange1}
        id="outlined-name"
        label="password"
        variant="outlined"
      />{" "}
      <br />
      {errpass && <p style={{ color: "red" }}>{passwordErrorType}</p>}
      <br />
      <button onClick={() => navigate("/home")}>landing page</button>
      <br />
      <button onClick={() => save()}>save</button>
    </div>
  );
}

export default Login;

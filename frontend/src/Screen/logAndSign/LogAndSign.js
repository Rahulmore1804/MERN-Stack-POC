import React, { useEffect, useState } from "react";
import Login from "../../helperComponent/LoginCompo";
import Registration from "../../helperComponent/Registration";
import "./style.css";
import { useNavigate } from "react-router";

function LogAndSign() {
  const navigate = useNavigate();
  const [loginScreen, setLoginScreen] = useState(true);

  useEffect(() => {
    const myValue = localStorage.getItem('myKey');

    if (myValue){
      navigate("/offer")
    }
  }, [])
  
  return (
    <div>
      <div className="selecter">
        <div className="box1" onClick={() => setLoginScreen(true)}>
          Login
        </div>
        <div className="box2" onClick={() => setLoginScreen(false)}>
          Signin
        </div>
      </div>
      <div>{loginScreen ? <Login /> : <Registration />}</div>
    </div>
  );
}

export default LogAndSign;

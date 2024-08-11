import React from "react";
import { ap2 } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

function Card(props) {
  const { Restaurants, foods } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        dispatch(ap2(foods));
        const tokenKey = localStorage.getItem("myKey");
        axios
          .post("http://localhost:3001/addtocart", {
            item: foods,
            token: tokenKey,
          })
          .then((res) => {
            console.log("res", res);
          });
        navigate("/cart");
      }}
      style={{ width: "250px", border: "1px solid black}", height: "300px" }}
    >
      <img
        style={{ width: "200px", margin: "20px" }}
        src={require("../assets/images/b.webp")}
      />
      <div style={{ fontWeight: "700", marginBottom: "0px" }}>
        <span > {foods[0]}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "30px",
            background: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <img
            style={{ width: "25px", margin: "5px" }}
            src={require("../assets/images/star.png")}
          />
          4.5
        </div>
        <span> {foods[1]} mins</span>
        <span>Rs {foods[2]}</span>
      </div>
    </div>
  );
}

export default Card;

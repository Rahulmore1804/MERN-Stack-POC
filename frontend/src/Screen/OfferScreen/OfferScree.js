import React, { useEffect } from "react";
import Header from "../../helperComponent/Header";
import "./style.css";
import axios from "axios";
function OfferScreen() {
  useEffect(() => {
    const token = localStorage.getItem("myKey");
    console.log("token", token);
    // const header = `Authorization: { Authorization: `Bearer ${data.token}`}`;
    axios
      .get("http://localhost:3001/getauth", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("res", res.data);
      });
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="offerh">
        <h1>Offers for you</h1>
        <button
          onClick={() => {
            localStorage.removeItem("myKey");
          }}
        >
          delete jwt token
        </button>
        <span>Explore top deals and offers exclusively for you!</span>
      </div>
    </div>
  );
}
export default OfferScreen;

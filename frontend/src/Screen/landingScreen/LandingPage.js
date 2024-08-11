import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incNumber } from "../../redux/actions";
import SearchBar from "material-ui-search-bar";
import axios from "axios";

function LandingPage() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState("");
  const handleSearch = () => {
    axios.get("http://localhost:3001/items").then((res) => {
      // console.log(res.data);
    });
    axios.get("http://localhost:3001/cities").then((res) => {
      // console.log(res.data);
      setList(res.data);
    });
  };

  const pageNumber = useSelector((state) => state.changeNumber);
  return (
    <div>
      LandingPage
      <button onClick={() => navigate("/home")}>landing page</button>
      {pageNumber}
      <button onClick={() => dispatch(incNumber())}>d</button>
      <SearchBar
        onChange={(newValue) => {
          setSearchStr(newValue);
        }}
        onRequestSearch={() => handleSearch()}
        value={searchStr}
        style={{
          width: "100%",
        }}
      />
      <div>
        {list.map((val, key) => {
          return (
            <div>
              {val}
              <br />
            </div>
          );
        })}
      </div>
      <div>
        {list
          .filter((item) => {
            const st = searchStr.toLowerCase();
            const fn = item.toLowerCase();
            return fn.startsWith(st) && st;
          })
          .map((val, key) => {
            return (
              <div>
                {val}
                <br />
              </div>
            );
          })}
      </div>
      <button onClick={() => navigate("/logandsign")}>loginpage</button>
    </div>
  );
}

export default LandingPage;

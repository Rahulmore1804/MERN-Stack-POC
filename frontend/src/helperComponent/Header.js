import React, { useEffect, useState } from "react";
import "./style.css";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ap } from "../redux/actions";
import { ap1 } from "../redux/actions";
function Header() {
  const navigate = useNavigate();
  const [mainlist, setMainList] = useState([]);
  const [mainlist1, setMain1List] = useState([]);
  const [sugglist, setsuggList] = useState([]);
  const [sugglist1, setsugg1List] = useState([]);
  const dispatch = useDispatch();
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  const [searchStr, setSearchStr] = useState("");
  const handleSearch = async () => {
    // axios.get("http://localhost:3001/items").then((res) => {
    //   console.log(res.data);
    // });
    // axios.get("http://localhost:3001/cities").then((res) => {
    //   console.log(res.data);
    // await axios.get("http://localhost:3001/getAPIData").then((res) => {
    //   const m = res.data[0].data.filter((item) => {
    //     const st = searchStr.toLowerCase();
    //     const fn = item.Restaurants.toLowerCase();
    //     // console.log("fn", res.data[0]);
    //     return fn.startsWith(st) && st;
    //   });
    //   // dispatch(ap(m));
    // });
    navigate("/res");
  };
  useEffect(() => {
    axios.get("http://localhost:3001/getAPIDataofcity").then((res) => {
      setMain1List(res.data);
      console.log("res.data", res.data);
    });
    axios.get("http://localhost:3001/getAPIData").then((res) => {
      setMainList(res.data);
      console.log("res.data[0].data", res.data);
    });
  }, []);
  const call = async () => {
    const m = mainlist.filter((item) => {
      const st = searchStr.toLowerCase();
      const fn = item.Restaurants.toLowerCase();
      return fn.startsWith(st) && st;
    });
    setsuggList(m);
    console.log("mainlias1", mainlist1);
    const m1 = mainlist1.filter((item) => {
      const st = searchStr.toLowerCase();
      const fn = item.cityname.toLowerCase();
      console.log("fn", fn);
      return fn.startsWith(st) && st;
    });

    setsugg1List(m1);
  };

  return (
    <div>
      <div className="header">
        <div className="hp1">
          <img className="logo" src={require("../assets/images/logo.jpg")} />
          <SearchBar
            onChange={(newValue) => {
              setSearchStr(newValue);
              call();
            }}
            onRequestSearch={() => handleSearch()}
            value={searchStr}
            style={{
              width: "300px",
            }}
          />
        </div>
        <div className="hp2">
          <p>Offer</p>
          <p>Help</p>
          <p>Search</p>
          <p>Sign In</p>
          <p>Cart</p>
        </div>
      </div>
      <input type="checkbox" onChange={toggleTheme} />
      <div className="ll">
        <table>
          {sugglist.map((e) => {
            return (
              <div
                onClick={() => {
                  dispatch(ap([e]));
                  navigate("/res");
                }}
              >
                {e.Restaurants}
              </div>
            );
          })}
        </table>
      </div>
      <div className="ll1">
        <table>
          {sugglist1.map((e) => {
            return (
              <div
                onClick={() => {
                  dispatch(ap1([e]));
                  navigate("/res1");
                }}
              >
                {e.cityname}
              </div>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Header;

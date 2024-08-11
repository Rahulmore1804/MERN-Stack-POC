import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ap } from "../../redux/actions";
import Card from "../../helperComponent/Card";
// import { Card } from "@material-ui/core";
import "./styles.css";

function City() {
  const sa = useSelector((state) => state.syncData2.alldata2);
  const [mainlist, setMainList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/test").then((res) => {
      setMainList(res.data[0].data);
      console.log("firsthvbdhjv", res.data);
    });
  }, []);

  return (
    <div>
      <div>
        {mainlist.map((e) => {
          return (
            <div
              className="llaa"
              onClick={() => {
                console.log("e", e);
                dispatch(ap([e]));
                navigate("/res");
              }}
            >
              {e.Restaurants}
              {/* <Card
              Restaurants={e.Restaurants}
              foods={e.fooditems}/> */}
              <table>
                {e.fooditems.map((e) => {
                  return <tr>{e}</tr>;
                })}
              </table>

              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default City;

import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../helperComponent/Card";
import CardFood from "../../helperComponent/CardFood";
function Res() {
  const [list, setList] = useState([]);
  const sa = useSelector((state) => state.syncData.alldata1);
  useEffect(() => {
    console.log("sa", sa);
    setList(sa);
    console.log("list", list);
  }, []);

  return (
    <div>
      {sa[0].Restaurants}
      <div style={{ display: "flex" }}>
        {sa[0].fooditems.map((e) => {
          return <Card foods={e} />;
        })}
      </div>
    </div>
  );
}

export default Res;

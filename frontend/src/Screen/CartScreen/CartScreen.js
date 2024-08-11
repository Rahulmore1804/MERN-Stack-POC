import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import apiGwtData from "../../utils/api";

function CartScreen() {
  const sa = useSelector((state) => state.syncData11.cart);
  const [trigger, setTrigger] = useState(true);
  const [cartlist, setcartlist] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("myKey");
    console.log("useEffect called");
    // console.log(sa);
    apiGwtData.get("/getauth").then((res) => {
      // setcartlist(res.data.data);
      console.log("interceptor data", res.data);
    }).catch(e=>console.log('e', e));
    axios
      .get("http://localhost:3001/getauth", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setcartlist(res.data.data);
        console.log("rr", res.data);
      });
  }, [trigger]);
  return (
    <div>
      CartScreen
      {/* {sa.map((e) => {
        return (
          <div
            onClick={() => {
              console.log("food", e);
            }}
          >
            {e[0]}
          </div>
        );
      })} */}
      {cartlist.map((e) => {
        return (
          <div>
            <p
              onClick={async () => {
                setTrigger(!trigger);
                const token = localStorage.getItem("myKey");
                const aa = cartlist.filter((item) => item[0] !== e[0]);
                await axios
                  .post("http://localhost:3001/removefromcart", {
                    m1: aa,
                    token: token,
                  })
                  .then((res) => {
                    console.log("called to cart");
                  });
              }}
            >
              {e[0]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CartScreen;

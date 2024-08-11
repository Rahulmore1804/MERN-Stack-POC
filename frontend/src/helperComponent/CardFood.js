import React from "react";

function CardFood(props) {
  const {foods} = props
  return (
    
    <div
      style={{ width: "250px", border: "1px solid black}", height: "300px" }}
    >
        <button onClick={()=>{console.log('foods', foods)}}>fred</button>
      <img
        style={{ width: "200px", margin: "20px" }}
        src={require("../assets/images/b.webp")}
      />
      <div style={{ fontWeight: "700", marginBottom: "0px" }}>
  {/* <span> {foods[0]}</span> */}
      </div>
     
      {/* <span>{foods[1]}</span> */}
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
        <span>33 mins</span>
        <span>Rs 500</span>
      </div>
    </div>
  );
}

export default CardFood;

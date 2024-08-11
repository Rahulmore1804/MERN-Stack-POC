import React from "react";
import Card from "../../helperComponent/Card";
import Header from "../../helperComponent/Header";
const list = [1, 2, 3, 4, 5, 6, 7, 8, 989, 1];

function HomeScreen() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: 20,
          justifyItems: "center",
        }}
      >
        {list.map(() => {
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default HomeScreen;

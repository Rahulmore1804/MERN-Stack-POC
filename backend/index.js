const express = require("express");
const userRouter = require("./routers/user2");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3001;
app.use(express.json());
app.use(userRouter);
app.listen(port, () => {
  console.log("Server is up on port ", port);
});
const myFunc = async () => {
  const token = jwt.sign({ _id: "dcsjncksnc" }, "thisismynewproje", {
    expiresIn: "2 seconds",
  });
  console.log("token", token);

};
myFunc();

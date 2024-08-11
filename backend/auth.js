const jwt = require("jsonwebtoken");
const User = require("./DB/model");

const auth = async (req, res, next) => {
  console.log("first");
  try {
    token = req.header("Authorization").replace("Bearer ", "");
    console.log("token", token);
    const decode = jwt.verify(token, "ABCD");
    console.log("decode", decode._id);
    const user = await User.findOne({ email: decode._id, token: token });
    console.log("user", user);
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "auth failed" });
  }
};

module.exports = auth;

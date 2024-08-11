const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dt1", {
  // useNewUrlParser:true,
  // useCreateIndex:true
});
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
  },
  data: [],
  // token :[
  //   {
  //     token :{
  //       type :Object,
  //       required : true
  //     }
  //   }
  // ]

  token: {
    type: String,
  },
});

module.exports = User;
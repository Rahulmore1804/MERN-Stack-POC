const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dt1", {
  // useNewUrlParser:true,
  // useCreateIndex:true
});
const User = mongoose.model("Data", {
  data: {
    type: Object,
    required: true,
  },
});
module.exports = User;

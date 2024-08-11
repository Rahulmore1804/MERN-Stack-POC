const express = require("express");
const User = require("../DB/model");
const dataAPI = require("../DB/model2");
const router = new express.Router();
const cors = require("cors");
const data = require("../data");
let userListLog = [];
let userListReg = [];
const cities1 = ["pune", "surat", "noida", "indore", "bangalore"];
const hotels1 = [
  {
    Restaurants: "Chingari",
    fooditems: [
      "Maharashtrian Thali",
      "Ban Maska",
      "Mango Mastani",
      "Bhakarwadi",
      "Misal Pav",
    ],
  },
];

const items = [
  {
    city: "surat",
    Restaurants: [
      "Chingari",
      "Copacabana",
      "Baan Tao",
      "Nisarg",
      "Rangla Dhaba",
      "Paasha",
      "1000 OAKS",
      "Malaka Spice",
      "Mezza9",
    ],
  },
  {
    city: "surat",
    Restaurants: [
      "Chingari",
      "Copacabana",
      "Baan Tao",
      "Nisarg",
      "Rangla Dhaba",
      "Paasha",
      "1000 OAKS",
      "Malaka Spice",
      "Mezza9",
    ],
  },
];

router.use(express.json());
router.use(cors());
router.get("/usersoo", async (req, res) => {
  res.send("hnd");
});

router.post("/login", function (req, res) {
  const email = req.body.F1;
  const password = req.body.F2;
  userListLog = [...userListLog, { email, password }];
  res.send({ message: "saved" });
  console.log("userList", userListLog);
});
router.post("/registration", async (req, res) => {
  const email = req.body.F1;
  const password = req.body.F2;
  const name = req.body.F3;
  const u1 = new User({ email: email, password: password, name: name });
  try {
    await u1.save();
    return res.status(201);
  } catch (e) {
    console.log("Error", e);
  }
  userListReg = [...userListReg, { email, password, name }];
  res.send({ message: "saved" });
  console.log("userList", userListReg);
});

router.get("/cities", function (req, res) {
  res.send(cities);
});
router.get("/items", function (req, res) {
  res.send(items);
});
router.get("/getDB", async (req, res) => {
  const items = await User.find({});
  res.status(201).send(items);
});
router.get("/getAPIData", async (req, res) => {
  const items = await dataAPI.find({});
  res.status(201).send(hotels);
});
router.get("/getAPIDataofcity", async (req, res) => {
  res.status(201).send(allDataAPI);
});
router.get("/saveAPIData", async (req, res) => {
  const d1 = new dataAPI({ data: allDataAPI });
  try {
    await d1.save();
    return res.status(201);
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/clearDB", async (req, res) => {
  const a = await dataAPI.deleteMany();
  res.status(201).send("sucess");
});
module.exports = router;

const cities = ["pune", "surat", "noida", "indore", "bangalore"];
const hotels = [
  {
    Restaurants: "Chingari",
    fooditems: [
      ["Maharashtrian Thali", 20, 100],
      ["Ban Maska", 10, 50],
      ["Mango Mastani", 15, 90],
      ["Misal Pav", 25, 180],
    ],
  },
  {
    Restaurants: "Copacabana",
    fooditems: [
      ["Mango Mastani", 15, 90],
      ["Bhakarwadi", 10, 200],
      ["Misal Pav", 25, 180],
    ],
  },
  {
    Restaurants: "Baan Tao",
    fooditems: [
      ["Maharashtrian Thali", 20, 100],
      ["Ban Maska", 10, 50],
      ["Mango Mastani", 15, 90],
    ],
  },
  {
    Restaurants: "Nisarg",
    fooditems: [
      ["Ban Maska", 10, 50],
      ["Bhakarwadi", 10, 200],
    ],
  },
  {
    Restaurants: "Rangla Dhaba",
    fooditems: [
      ["Maharashtrian Thali", 20, 100],
      ["Ban Maska", 10, 50],
      ["Misal Pav", 25, 180],
    ],
  },
  {
    Restaurants: "Paasha",
    fooditems: [
      ["Ban Maska", 10, 50],
      ["Bhakarwadi", 10, 200],
    ],
  },
  {
    Restaurants: "1000 OAKS",
    fooditems: [
      ["Maharashtrian Thali", 20, 100],
      ["Ban Maska", 10, 50],
      ["Misal Pav", 25, 180],
    ],
  },
  {
    Restaurants: "Malaka Spice",
    fooditems: [
      ["Maharashtrian Thali", 20, 100],
      ["Ban Maska", 10, 50],
      ["Mango Mastani", 15, 90],
      ["Misal Pav", 25, 180],
    ],
  },
  {
    Restaurants: "Mezza9",
    fooditems: [
      ["Maharashtrian Thali", 20, 100],
      ["Ban Maska", 10, 50],
      ["Mango Mastani", 15, 90],
    ],
  },
  {
    Restaurants: "Dil Se Re",
    fooditems: [
      ["Khandvi", 20, 100],
      ["sev tameta", 10, 50],
      ["Methi Thepla", 15, 90],
    ],
  },
  {
    Restaurants: "Lake View",
    fooditems: [
      ["golpapdi", 20, 100],
      ["gujarati ghathiy", 10, 50],
      ["Khaman", 15, 90],
    ],
  },
  {
    Restaurants: "Jalaram Khichdi",
    fooditems: [
      ["khichdi kadhi", 20, 100],
      ["gujarati ghathiy", 10, 50],
      ["fafda", 15, 90],
    ],
  },
  {
    Restaurants: "Mysore Cafe",
    fooditems: [
      ["masala Dhosa", 20, 100],
      ["upma", 10, 50],
      ["medu vada", 15, 90],
    ],
  },
  {
    Restaurants: "De Villa Garden Restaurant",
    fooditems: [
      ["khichdi kadhi", 20, 100],
      ["gujarati ghathiy", 10, 50],
      [("medu vada", 15, 90)],
    ],
  },
  {
    Restaurants: "Kansar Gujarati Thali",
    fooditems: [
      ["khichdi kadhi", 20, 100],
      ["gujarati ghathiy", 10, 50],
      [("medu vada", 15, 90)],
    ],
  },
  {
    Restaurants: "Sizzling Culture",
    fooditems: [
      ["khichdi kadhi", 20, 100],
      ["gujarati ghathiy", 10, 50],
      [("medu vada", 15, 90)],
    ],
  },
];
const RestaurantsInCity = [
  {
    city: "Pune",
    Restaurants: [
      "Chingari",
      "Copacabana",
      "Baan Tao",
      "Nisarg",
      "Rangla Dhaba",
      "Paasha",
      "1000 OAKS",
      "Malaka Spice",
      "Mezza9",
    ],
  },
  {
    city: "surat",
    Restaurants: [
      "Barbeque Nation",
      "Dil Se Re",
      "Lake View",
      "Jalaram Khichdi",
      "Mysore Cafe",
      "De Villa Garden Restaurant",
      "Kansar Gujarati Thali",
      "Sizzling Culture",
    ],
  },
];

const allDataAPI = [
  {
    cityname: "pune",
    data: [
      {
        Restaurants: "Chingari",
        fooditems: [
          ["Maharashtrian Thali", 20, 100],
          ["Ban Maska", 10, 50],
          ["Mango Mastani", 15, 90],
          ["Misal Pav", 25, 180],
        ],
      },
      {
        Restaurants: "Copacabana",
        fooditems: [
          ["Mango Mastani", 15, 90],
          ["Bhakarwadi", 10, 200],
          ["Misal Pav", 25, 180],
        ],
      },
      {
        Restaurants: "Baan Tao",
        fooditems: [
          ["Maharashtrian Thali", 20, 100],
          ["Ban Maska", 10, 50],
          ["Mango Mastani", 15, 90],
        ],
      },
      {
        Restaurants: "Nisarg",
        fooditems: [
          ["Ban Maska", 10, 50],
          ["Bhakarwadi", 10, 200],
        ],
      },
      {
        Restaurants: "Rangla Dhaba",
        fooditems: [
          ["Maharashtrian Thali", 20, 100],
          ["Ban Maska", 10, 50],
          ["Misal Pav", 25, 180],
        ],
      },
      {
        Restaurants: "Paasha",
        fooditems: [
          ["Ban Maska", 10, 50],
          ["Bhakarwadi", 10, 200],
        ],
      },
      {
        Restaurants: "1000 OAKS",
        fooditems: [
          ["Maharashtrian Thali", 20, 100],
          ["Ban Maska", 10, 50],
          ["Misal Pav", 25, 180],
        ],
      },
      {
        Restaurants: "Malaka Spice",
        fooditems: [
          ["Maharashtrian Thali", 20, 100],
          ["Ban Maska", 10, 50],
          ["Mango Mastani", 15, 90],
          ["Misal Pav", 25, 180],
        ],
      },
      {
        Restaurants: "Mezza9",
        fooditems: [
          ["Maharashtrian Thali", 20, 100],
          ["Ban Maska", 10, 50],
          ["Mango Mastani", 15, 90],
        ],
      },
    ],
  },

  {
    cityname: "surat",
    data: [
      {
        Restaurants: "Dil Se Re",
        fooditems: [
          ["Khandvi", 20, 100],
          ["sev tameta", 10, 50],
          ["Methi Thepla", 15, 90],
        ],
      },
      {
        Restaurants: "Lake View",
        fooditems: [
          ["golpapdi", 20, 100],
          ["gujarati ghathiy", 10, 50],
          ["Khaman", 15, 90],
        ],
      },
      {
        Restaurants: "Jalaram Khichdi",
        fooditems: [
          ["khichdi kadhi", 20, 100],
          ["gujarati ghathiy", 10, 50],
          ["fafda", 15, 90],
        ],
      },
      {
        Restaurants: "Mysore Cafe",
        fooditems: [
          ["masala Dhosa", 20, 100],
          ["upma", 10, 50],
          ["medu vada", 15, 90],
        ],
      },
      {
        Restaurants: "De Villa Garden Restaurant",
        fooditems: [
          ["khichdi kadhi", 20, 100],
          ["gujarati ghathiy", 10, 50],
          [("medu vada", 15, 90)],
        ],
      },
      {
        Restaurants: "Kansar Gujarati Thali",
        fooditems: [
          ["khichdi kadhi", 20, 100],
          ["gujarati ghathiy", 10, 50],
          [("medu vada", 15, 90)],
        ],
      },
      {
        Restaurants: "Sizzling Culture",
        fooditems: [
          ["khichdi kadhi", 20, 100],
          ["gujarati ghathiy", 10, 50],
          [("medu vada", 15, 90)],
        ],
      },
    ],
  },
];

// authenticatkion  trials

const auth = require("../auth");
router.get("/getauth", auth, async (req, res) => {
  res.send(req.user);
});
const jwt = require("jsonwebtoken");
const getAuthToken = (email) => {
  const token = jwt.sign({ _id: email }, "ABCD");
  console.log("token", token);

  return token;
};

router.post("/addtocart", async (req, res) => {
  const item = req.body.item;
  const key = req.body.token;
  const al = await User.findOneAndUpdate(
    {
      token: key,
    },
    { $push: { data: item } }
  );

  console.log("item", al);
});
router.post("/saveAuthUser", async (req, res) => {
  const email = req.body.F1;
  const password = req.body.F2;
  const name = req.body.F3;

  const token = getAuthToken(email);
  console.log("token111", token);
  const u1 = new User({
    email: email,
    password: password,
    name: name,
    token: token,
  });
  try {
    await u1.save();
    return res.status(201);
  } catch (e) {
    console.log("Error", e);
  }
  userListReg = [...userListReg, { email, password, name }];
  res.send({ message: "saved" });
  console.log("userList", userListReg);
});
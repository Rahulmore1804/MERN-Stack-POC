const express = require("express");
const User = require("../DB/model");
const dataAPI = require("../DB/model2");
const router = new express.Router();
const cors = require("cors");
const data = require("../data");
const auth = require("../auth");
router.use(cors());
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

// Initial data savig

// authentication Login and signin

router.post("/removefromcart", async (req, res) => {
  const item = req.body.m1;
  const key = req.body.token;
  console.log(item, key);
  const a = await User.findOneAndUpdate(
    {
      token: key,
    },
    { data: item }
  );
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
    console.log("token", token);
    return res.status(201).send({ message: "saved", token: token });
  } catch (e) {
    console.log("Error", e);
  }
  // userListReg = [...userListReg, { email, password, name }];
  // res.send({ message: "saved",token:token });
  // conso1le.log("userList", userListReg);
});

//checking Auth and hwt token

router.get("/getauth", auth, async (req, res) => {
  res.send(req.user);
});
const jwt = require("jsonwebtoken");
const getAuthToken = (email) => {
  const token = jwt.sign({ _id: email }, "ABCD");
  console.log("token", token);

  return token;
};
router.get("/test", async (req, res) => {
  res.send(allDataAPI);
});
// database Content
// const hotels = [
//   {
//     Restaurants: "Chingari",
//     fooditems: [
//       ["Maharashtrian Thali", 20, 100],
//       ["Ban Maska", 10, 50],
//       ["Mango Mastani", 15, 90],
//       ["Misal Pav", 25, 180],
//     ],
//   },
//   {
//     Restaurants: "Copacabana",
//     fooditems: [
//       ["Mango Mastani", 15, 90],
//       ["Bhakarwadi", 10, 200],
//       ["Misal Pav", 25, 180],
//     ],
//   },
//   {
//     Restaurants: "Baan Tao",
//     fooditems: [
//       ["Maharashtrian Thali", 20, 100],
//       ["Ban Maska", 10, 50],
//       ["Mango Mastani", 15, 90],
//     ],
//   },
//   {
//     Restaurants: "Nisarg",
//     fooditems: [
//       ["Ban Maska", 10, 50],
//       ["Bhakarwadi", 10, 200],
//     ],
//   },
//   {
//     Restaurants: "Rangla Dhaba",
//     fooditems: [
//       ["Maharashtrian Thali", 20, 100],
//       ["Ban Maska", 10, 50],
//       ["Misal Pav", 25, 180],
//     ],
//   },
//   {
//     Restaurants: "Paasha",
//     fooditems: [
//       ["Ban Maska", 10, 50],
//       ["Bhakarwadi", 10, 200],
//     ],
//   },
//   {
//     Restaurants: "1000 OAKS",
//     fooditems: [
//       ["Maharashtrian Thali", 20, 100],
//       ["Ban Maska", 10, 50],
//       ["Misal Pav", 25, 180],
//     ],
//   },
//   {
//     Restaurants: "Malaka Spice",
//     fooditems: [
//       ["Maharashtrian Thali", 20, 100],
//       ["Ban Maska", 10, 50],
//       ["Mango Mastani", 15, 90],
//       ["Misal Pav", 25, 180],
//     ],
//   },
//   {
//     Restaurants: "Mezza9",
//     fooditems: [
//       ["Maharashtrian Thali", 20, 100],
//       ["Ban Maska", 10, 50],
//       ["Mango Mastani", 15, 90],
//     ],
//   },
//   {
//     Restaurants: "Dil Se Re",
//     fooditems: [
//       ["Khandvi", 20, 100],
//       ["sev tameta", 10, 50],
//       ["Methi Thepla", 15, 90],
//     ],
//   },
//   {
//     Restaurants: "Lake View",
//     fooditems: [
//       ["golpapdi", 20, 100],
//       ["gujarati ghathiy", 10, 50],
//       ["Khaman", 15, 90],
//     ],
//   },
//   {
//     Restaurants: "Jalaram Khichdi",
//     fooditems: [
//       ["khichdi kadhi", 20, 100],
//       ["gujarati ghathiy", 10, 50],
//       ["fafda", 15, 90],
//     ],
//   },
//   {
//     Restaurants: "Mysore Cafe",
//     fooditems: [
//       ["masala Dhosa", 20, 100],
//       ["upma", 10, 50],
//       ["medu vada", 15, 90],
//     ],
//   },
//   {
//     Restaurants: "De Villa Garden Restaurant",
//     fooditems: [
//       ["khichdi kadhi", 20, 100],
//       ["gujarati ghathiy", 10, 50],
//       [("medu vada", 15, 90)],
//     ],
//   },
//   {
//     Restaurants: "Kansar Gujarati Thali",
//     fooditems: [
//       ["khichdi kadhi", 20, 100],
//       ["gujarati ghathiy", 10, 50],
//       [("medu vada", 15, 90)],
//     ],
//   },
//   {
//     Restaurants: "Sizzling Culture",
//     fooditems: [
//       ["khichdi kadhi", 20, 100],
//       ["gujarati ghathiy", 10, 50],
//       [("medu vada", 15, 90)],
//     ],
//   },
// ];
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
router.get("/getAPIDataofcity", async (req, res) => {
  // const items = await dataAPI.find({});
  res.status(201).send(allDataAPI);
});

router.get("/getDB", async (req, res) => {
  const items = await User.find({});
  res.status(201).send(items);
});
router.get("/getAPIData", async (req, res) => {
  const items = await dataAPI.find({});
  res.status(201).send(hotels);
});

// database Clear

router.get("/clearDBData", async (req, res) => {
  const a = await dataAPI.deleteMany();
  res.status(201).send("sucess");
});
router.get("/clearDBUser", async (req, res) => {
  const a = await User.deleteMany();
  res.status(201).send("sucess");
});

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

module.exports = router;


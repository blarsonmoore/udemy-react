const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// app.use(express.static("public"));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

// app.listen(PORT);

app.listen(PORT, function() {
  console.log("App is running on port " + PORT);
});

//http://localhost:5000/

//key.js production environment key

if (process.env.NODE_ENV === "production") {
  //return production key
  module.exports = require("./prod");
} else {
  //return dev keys
  module.exports = require("./dev");
}

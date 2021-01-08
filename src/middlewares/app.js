const auth = require("basic-auth");
const dotenv = require("dotenv");
// #############
const myAuth = require("./basic-auth");
// #############
const validateAuth = myAuth({ auth, dotenv });
// #############
const services = Object.freeze({
  validateAuth,
});

module.exports = services;
module.exports = {
  validateAuth,
};

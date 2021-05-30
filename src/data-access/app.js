const dotenv = require("dotenv");
const mg = require("mongoose");

// ##############
const connect = require("./connection");
// ##############
const connects = connect({ dotenv, mg });
// ##############
const services = Object.freeze({ connects });

module.exports = services;
module.exports = { connects };

const dotenv = require("dotenv");
const pg = require("pg");

// ##############
const connect = require("./connection");
// ##############
const connects = connect({ dotenv, pg });
// ##############
const services = Object.freeze({ connects });

module.exports = services;
module.exports = { connects };

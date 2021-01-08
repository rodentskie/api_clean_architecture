const express = require("express");
const router = express.Router();
const makeExpressCallback = require("../../express-callback/app");

const route = require("./routes");

const { validateAuth } = require("../../middlewares/app"); // basic authh validation
//#########
const routes = route({ router, makeExpressCallback, validateAuth });

const services = Object.freeze({
  routes,
});

module.exports = services;

module.exports = {
  routes,
};

module.exports = router;

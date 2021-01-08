const dotenv = require("dotenv");
dotenv.config();

const crypto = require("crypto");
const algorithm = process.env.ALGORITHM;
const password = process.env.ENCRYPTION_KEY;
const iv = process.env.IV;
// #####################
const encrypts = require("./encrypt");
const decrypts = require("./decrypt");
// #####################
const encrypt = encrypts({ crypto, algorithm, password, iv });
const decrypt = decrypts({ crypto, algorithm, password, iv });
// #####################
const services = Object.freeze({
  encrypt,
  decrypt,
});

module.exports = services;
module.exports = {
  decrypt,
  encrypt,
};

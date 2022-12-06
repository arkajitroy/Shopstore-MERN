require("dotenv").config();

module.exports = {
  JWT_SECRET: process.env.JWT_ACCESS_KEY,
};

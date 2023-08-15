const jwt = require("jsonwebtoken");
const config = require("../../config/config")

const verify = (payload)=> jwt.verify(payload, config.SECRET_KEY)
const sign = (payload)=> jwt.sign(payload, config.SECRET_KEY);

module.exports = {
    verify,
    sign
}
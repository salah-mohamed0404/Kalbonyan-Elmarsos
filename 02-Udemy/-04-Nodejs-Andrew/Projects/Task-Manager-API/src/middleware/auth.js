const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async function (req, res, next) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decooded = jwt.verify(token, "thisismynewcourse");
    const user = await User.findOne({
      _id: decooded._id,
      "tokens.token": token,
    });

    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please authnticate." });
  }
};

module.exports = auth;

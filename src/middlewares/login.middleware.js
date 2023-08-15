const jwt = require("../utils/jwt");

const loginMidlleware = (req, res, next) => {
  const token =req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(403).json({Error: "Invalid token"});
  }
  const verifiedUser = jwt.verify(token);
  req.verifiedUser = verifiedUser.payload;
  next();
};

const isAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
      return next();
    }
  
    return res.status(403).json({ message: 'У вас нет прав для выполнения этого действия.' });
};
  
  
module.exports = {
    loginMidlleware, 
    isAdmin
};
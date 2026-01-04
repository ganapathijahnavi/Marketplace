const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const secrets = [process.env.JWT_SECRET || "secret", "USER_SECRET_TOKEN", "ADMIN_SECRET_TOKEN"];
  let decoded = null;

  for (const key of secrets) {
    try {
      decoded = jwt.verify(token, key);
      break;
    } catch (err) {
      decoded = null;
    }
  }

  if (!decoded) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }

  req.userId = decoded.id || decoded.userId; // support both token shapes
  req.userRole = decoded.role;
  next();
};

module.exports = verifyUser;

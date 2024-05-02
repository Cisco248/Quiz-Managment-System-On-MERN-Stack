const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    console.log("No token, sending 401 response");
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(`Token verification failed: ${err.message}`);
      return res.sendStatus(403); // Forbidden
    }
    console.log(`Token verified, user: ${JSON.stringify(user)}`);
    req.user = user; // Store user data in request object
    next(); // Move to the next middleware
  });
};

module.exports = authenticateToken;

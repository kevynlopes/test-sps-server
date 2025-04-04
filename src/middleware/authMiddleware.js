const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mesage: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, secret);
    req.usuario = payload;
    next();
  } catch (err) {
    return res.status(403).json({ mesage: "Token inválido ou expirado" });
  }
}

module.exports = authenticateToken;

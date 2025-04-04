const express = require("express");
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwt");
const userService = require("../services/userService");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const user = userService.findByEmail(email);

  if (!user || user.senha !== senha) {
    return res.status(401).json({ mensagem: "Credenciais inválidas" });
  }

  const token = jwt.sign({ email: user.email, tipo: user.tipo }, secret, {
    expiresIn,
  });

  res.json({ token });
});

module.exports = router;

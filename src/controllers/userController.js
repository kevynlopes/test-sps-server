const userService = require("../services/userService");

function list(req, res) {
  const users = userService.listUsers();
  res.json(users);
}

function register(req, res) {
  const { email, nome, tipo, senha } = req.body;

  if (userService.findByEmail(email)) {
    return res.status(400).json({ mesage: "E-mail já cadastrado" });
  }

  userService.addUser({ email, nome, tipo, senha });

  res.status(201).json({ mesage: "Usuário cadastrado com sucesso" });
}

function remove(req, res) {
  const { email } = req.params;

  const removed = userService.deleteUser(email);
  if (!removed) {
    return res.status(404).json({ mesage: "Usuário não encontrado" });
  }
  s;

  res.json({ mesage: "Usuário removido com sucesso." });
}

function update(req, res) {
  const { email } = req.params;

  const newData = req.body;

  const updated = userService.updateUser(email, newData);

  if (!updated) {
    return res.status(404).json({ mesage: "Usuário não encontrado" });
  }

  res.json({ mesage: "Usuário atualizado com sucesso" });
}

function getByEmail(req, res) {
  try {
    const { email } = req.params;
    const user = userService.findByEmail(email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  list,
  register,
  remove,
  update,
  getByEmail,
};

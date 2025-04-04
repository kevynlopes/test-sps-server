const users = require("../models/userModel");

function findByEmail(email) {
  return users.find((user) => user.email === email);
}

function listUsers() {
  return users;
}

function addUser(user) {
  users.push(user);
}

function deleteUser(email) {
  const idx = users.findIndex((user) => user.email === email);

  if (idx !== -1) {
    users.splice(idx, 1);
    return true;
  }
  return false;
}

function updateUser(email, newData) {
  const user = findByEmail(email);

  if (user) {
    Object.assign(user, newData);
    return true;
  }
  return false;
}

module.exports = {
  findByEmail,
  addUser,
  deleteUser,
  listUsers,
  updateUser,
};

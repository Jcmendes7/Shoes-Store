const fs = require("fs");
const usersRegister = require("../controllers/UsersController");
function Register(name, email, password, confPassword) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.confPassword = confPassword;
}

function getAll() {
  //filesystem
  const createUsers = JSON.parse(
    fs.readFileSync("database/usersRegister.json", "utf-8")
  );

  return createUsers.map(
    (register) =>
      new Register(
        register.name,
        register.email,
        register.password,
        register.confPassword
      )
  );
}

function create(name, email, password, confPassword) {
  const newUser = new Register(name, email, password, confPassword);
  const usersList = getAll();
  usersList.push(newUser);
  fs.writeFileSync("database/usersRegister.json", JSON.stringify(usersList));
}

function getById(id) {
  const users = getAll();
  return users[id]
}

function update(id,name,email,password,confPassword) {
  //buscar todos os usuários
  const usersList = getAll()
  //pegar o usuário que tem o index == id
  const users = usersList[id];
  users.name = name;
  users.email = email;
  users.password = password;
  users.confPassword = confPassword;
  // salvar os dados alterados no banco de 
  fs.writeFileSync("database/usersRegister.json", JSON.stringify(usersList))
}

module.exports = {
  getAll,
  create,
  getById,
  update,
};

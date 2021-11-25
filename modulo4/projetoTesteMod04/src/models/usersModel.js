const { v4: uuid } = require("uuid");
const sha256 = require("js-sha256");

class Users {
    constructor(nome, email, senha) {
        this.id = uuid(),
        this.nome = nome,
        this.email = email,
        this.senha = sha256(senha)
    }
}

module.exports = Users

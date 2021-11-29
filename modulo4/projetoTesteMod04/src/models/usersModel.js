const { v4: uuid } = require("uuid");
const sha256 = require("js-sha256");

class Users {
    constructor(nome, email, senha) {
        this.nome = nome,
        this.email = email,
        this.senha = senha
    }
}

module.exports = Users
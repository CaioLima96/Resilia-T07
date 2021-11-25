const { v4: uuid } = require("uuid");

class TaskModel {
    constructor(titulo, descricao, status) {
        this.id = uuid(),
        this.titulo = titulo,
        this.descricao = descricao,
        this.status = status,
        this.data_criacao = new Date().toLocaleString()
    }
}

module.exports = TaskModel

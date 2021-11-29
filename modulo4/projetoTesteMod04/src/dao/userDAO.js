const bd = require('../infra/sqlite-db');
const {USERS_TABLE:TABLE} = require('../util/appConfig')

class UserDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getUserById = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE} WHERE id like ?`,
                id,
                (error, results) => {
                    console.log("Usuário unico retornado com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    getAllUsers = () => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE}`,
                (error, results) => {
                    console.log("Todos os Usuários retornados com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    saveUser = (user) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `INSERT INTO ${TABLE} (NOME, EMAIL, SENHA) VALUES (?, ?, ?)`,
                user.nome,
                user.email,
                user.senha,
                (error) => {
                if (error) {
                    reject("Error: " + error);
                } else {
                    resolve(true);
                }
                }
            );
        });
    };
    
    updateUser = (id, user) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `UPDATE ${TABLE} SET nome = ?, email = ?, senha = ? WHERE id = ?`,
                user.nome,
                user.email,
                user.senha,
                id,
                (error) => {
                    if (error) {
                    reject(error);
                    } else {
                    resolve(true);
                    }
                }
            );
        });
    };
    
    deleteUser = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, id, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    };
}

module.exports = new UserDao(bd)
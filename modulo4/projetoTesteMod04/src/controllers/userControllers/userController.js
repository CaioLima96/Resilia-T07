const UsersModel = require('../../models/usersModel')
const UsersDao = require('../../dao/userDAO')

class UserController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {
        //fetch("this.dbConn.getUserById(req.params.id)")

        try{
            let user = await this.dbConn
            .getUserById(req.params.id)
            if(user.length == 0) {
                console.log("Usuário não existe.")
                res.send("Usuário não existe.")
            } else {
                res.send(user)
            }
            
            
        } catch(error) {
            console.log('Erro da requisição: ' + error)
            res.send(error)
        }
        

        //this.dbConn.getUserById(req.params.id)
            
            // .then((user) => {
            //     res.send(user)
            // })
            // .catch((error) => {
            //     res.send(error)
            // })
    }

    // show = (req, res) => {
    //     const id = req.params.id;
    
    //     this.dbConn
    //       .getUserByID(id)
    //       .then((user) => {
    //         res.send(user);
    //       })
    //       .catch((error) => {
    //         res.send(error);
    //       });
    // };

    index = (req, res) => {
        // console.log(this.dbConn, `\nRota GET retornando todos os valores`)
        // res.send(this.dbConn)
        
        // this.dbConn.all("SELECT * FROM USUARIOS", (error, results) => {
        //     if(error) {
        //         res.send("Algo de errado num ta certo!")
        //     } else {
        //         res.send(results)
        //     }
        // })

        this.dbConn.getAllUsers().then(
            (result) => {
                res.send(result)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }

    save = (req, res) => {
        const {nome, email, senha} = req.body
        const user = new UsersModel(nome, email, senha)

        //Salva no banco
        this.dbConn.run(
            `INSERT INTO ${TABLE} VALUE (?, ?, ?, ?)`,
            user.id, user.nome, user.email, user.senha,
            (error) => {
                if(error){
                    res.send("Error: " + error)
                } else {
                    res.send("Tudo ok")
                }
            }
        )

        console.log(user)
    }

    remove = (req, res) => {
        const id = parseInt(req.params.id)
        this.dbConn = this.dbConn.filter((i) => {
            
            return i.id !== id;
        })
        //console.log(i)
        res.send(`Menssagem: ${id} apagado com sucesso`)
    }

    update = (req, res) => {
        const id = parseInt(req.params.id)
        const content = req.body

        for (let i =0; i < this.dbConn.length; i++) {
            if(this.dbConn[i].id = id) {
                this.dbConn[i] = content
            }
        }

        res.send(`User: ${id} modificado com sucesso`)
    }

}

module.exports = new UserController(UsersDao)

// module.exports = app = (app) => {
//     app.get('/users', function (req, res) {
//         const usuario = {
//             id: '1',
//             nome: 'Caio',
//             email: 'terror123@gmail.com',
//             data_nascimento: '03/01/1996',
//             senha: '1sg1sd5gh1s5fh1shh'
            
//         }

//         console.log("Rastreamento da aplicação sendo feito com nodemon")
//         res.send(usuario)
//     })

//     app.post('/users', function (req, res) {
//         res.send("Ok, agora temos um POST implementado")
//     })   
// }
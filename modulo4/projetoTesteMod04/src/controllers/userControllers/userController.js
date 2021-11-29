const UsersModel = require('../../models/usersModel')
const UsersDao = require('../../dao/userDAO')

class UserController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {

        try{
            let user = await this.dbConn
            .getUserById(req.params.id)

            if(user.length == 0) {

                console.log("Usuário não existe.")
                res.status(400).send({error: "Usuário não existe."});

            } else {

                console.log(user)
                res.status(200).send("Usuário retornado com sucesso").json()
            }  

        } catch(error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error.message);

            //return res.status(500).json(error.message);
        }
        

        //this.dbConn.getUserById(req.params.id)
            
            // .then((user) => {
            //     res.send(user)
            // })
            // .catch((error) => {
            //     res.send(error)
            // })
    }

    index = async (req, res) => {
        try {

            let userIndex = await this.dbConn.getAllUsers()

            //console.log(userIndex)
            res.status(200).send({data: userIndex, mensagem: "Usuários retornados com sucesso"})

        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error.message)
        }

        // this.dbConn.getAllUsers().then(
        //     (result) => {
        //         res.send(result)
        //     }
        // ).catch(
        //     (error) => {
        //         res.send(error)
        //     }
        // )

        // res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {nome, email, senha} = req.body
        const user = new UsersModel(nome, email, senha)

        try {

            await this.dbConn.saveUser(user)

            console.log(user)
            res.status(201).send("Usuário salvo com sucesso").json()

        } catch (error) {
            console.log('Erro da requisição: ' + error)
            res.status(500).json(error.message)
        }
        
        
        //console.log(user)
    }

    remove = async (req, res) => {
        try {

            await this.dbConn.deleteEvent(req.params.id)

            res.status(200).send("Usuário apagado com sucesso")

        } catch (error) {
            res.status(500).json(error.message)
        }
        
        
        //console.log(i)
        res.send(`Menssagem: ${id} apagado com sucesso`)
    }

    update = async (req, res) => {
        const id = req.params.id;
        const content = req.body;
        //console.log(id, content)

        try {

            let teste = await this.dbConn.getUserById(id)[0]
            console.log(teste)
            if(content.ID == null ) {
                content.ID = teste.ID
            }
            if(content.NOME == null) {
                content.NOME = teste.NOME
            }
            if(content.EMAIL == null) {
                content.EMAIL = teste.EMAIL
            }
            if(content.SENHA == null) {
                content.SENHA = teste.SENHA
            }

            await this.dbConn.updateUser(id, content)

            res.send(`User: ${id} modificado com sucesso`)
        } catch (error) {
            res.status(500).json(error.message)
        }
        
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
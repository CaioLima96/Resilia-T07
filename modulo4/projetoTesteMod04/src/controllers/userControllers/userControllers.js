class UsersControllers {
    show (req, res) {
        const usuario = {
            id: '1',
            nome: 'Caio',
            email: 'terror123@gmail.com',
            data_nascimento: '03/01/1996',
            senha: '1sg1sd5gh1s5fh1shh'
            
        }

        console.log("Rastreamento da aplicação sendo feito com nodemon")
        res.send(usuario)
    }

    save = (req, res) => {
        res.send("Rota POST de usuário ativada: usuário adicionado ao banco de dados")
    }
}

module.exports = UsersControllers

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



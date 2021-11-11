module.exports = app = (app) => {
    app.get('/users', function (req, res) {
        const usuario = {
            id: '1',
            nome: 'Caio',
            email: 'terror123@gmail.com',
            data_nascimento: '03/01/1996',
            senha: '1sg1sd5gh1s5fh1shh'
            
        }
        res.send(usuario)
    })
    
}



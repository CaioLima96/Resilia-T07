const express = require('express')
const app = express()
 
app.get('/usuario', function (req, res) {
    const usuario = {
        id: '1',
        nome: 'Caio',
        email: 'terror123@gmail.com',
        data_nascimento: '03/01/1996',
        senha: '1sg1sd5gh1s5fh1shh'
        
    }
    res.send(usuario)
})

app.get('/tarefa', function (req, res) {
    const tarefa = {
        id: 1,
        nome: 'Subir as 12 casas',
        descricao: 'Lorem ipsum',
        data_criacao: '03/05/2000',
        Prazo: '06/06/2006',
        status: 'fazendo',
        data_termino: null, 
        entrega_status: null,
        user_id: 1,  
    }
    res.send(tarefa)
})
 
app.get('/quadro', function (req, res) {
    const quadro = {
        id: 1,
        id_Usuario: 1,
        id_tarefa: 1,
        nome_quadro: 'Sei lá' 
    }
    res.send(quadro)
})

app.listen(3000)


// USUÁRIO
//    ID
//    Nome 
//    Email
//    Data nascimento
//    SENHA


// NOTA/TAREFA
//     ID
//     Nome_Nota/Tarefa
//     Data_criacao
//     Prazo
//     Data_termino
//     entrega_status
//     Descricao
//     User_Id
//     Status: A FAZER / FAZENDO / FEITO


// QUADRO 
//    Id 
//    Id_Usuario
//    Id_Tarefa
//    Nome_quadro


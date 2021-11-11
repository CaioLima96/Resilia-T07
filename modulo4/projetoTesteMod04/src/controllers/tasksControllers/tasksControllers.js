class TasksControllers {
    show = (req, res) => {
        res.send({
            id : '1',
            nome : 'Subir as 12 casas',
            descricao : 'Lorem ipsum',
            data_criacao: '03/05/2000',
            Prazo: '06/06/2006',
            status : 'fazendo',
            data_termino : null, 
            entrega_status: null,
            user_id: 1,
        })
    }

    save = (req, res) => {
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }
}




module.exports = TasksControllers





// function tasksControllers (req, res) {
//     res.send(
//         {
//             id : '1',
//             nome : 'Subir as 12 casas',
//             descricao : 'Lorem ipsum',
//             data_criacao: '03/05/2000',
//             Prazo: '06/06/2006',
//             status : 'fazendo',
//             data_termino : null, 
//             entrega_status: null,
//             user_id: 1,
//         }
//     )
// }











// app.get('/tarefas', function (req, res) {
//     const tarefa = {
//         id: 1,
//         nome: 'Subir as 12 casas',
//         descricao: 'Lorem ipsum',
//         data_criacao: '03/05/2000',
//         Prazo: '06/06/2006',
//         status: 'fazendo',
//         data_termino: null, 
//         entrega_status: null,
//         user_id: 1,  
//     }
//     res.send(tarefa)
// })
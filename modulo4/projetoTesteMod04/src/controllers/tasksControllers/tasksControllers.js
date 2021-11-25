const TaskModel = require('../../models/tasksModel')
const{tasksDB} = require('../../infra/bd')
const bd = require('../../infra/sqlite-db');
const {TASKS_TABLE:TABLE} = require('../../util/appConfig')


class TasksController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = (req, res) => {
        // const tarefa =  {
        //         id : '1',
        //         titulo : 'Subir as 12 casas',
        //         descricao : 'Lorem ipsum',
        //         data_criacao: '03/05/2000',
        //         Prazo: '06/06/2006',
        //         status : 'fazendo',
        //         data_termino : null, 
        //         entrega_status: null,
        //         user_id: 1,
        // }

        //console.log('abc')
        this.dbConn.forEach((task) => {
            if(task.id == req.params.id) {
                console.log(task,`\nRota GET "unica" feita com sucesso`)
                res.send(task)
            }
        })

        //res.send(this.dbConn)
    }

    index = (req, res) => {
        // console.log(this.dbConn, `\nRota GET retornando todos os valores`)
        // res.send(this.dbConn)
        this.dbConn.all("SELECT * FROM TAREFAS", (error, results) => {
            if(error) {
                res.send("Algo de errado num ta certo!")
            } else {
                res.send(results)
            }
        })
    }

    save = (req, res) => {
        //console.log(req.body)
        
        const {titulo, descricao, status} = req.body
        const tasks = new TaskModel(titulo, descricao, status)
        this.dbConn.push(tasks)

        //console.log(tasks)

        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
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

        res.send(`Task: ${id} modificado com sucesso`)
    }
}



module.exports = new TasksController(tasksDB)





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
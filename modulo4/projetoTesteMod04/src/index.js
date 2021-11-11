const express = require('express')
const app = express()
//const userControllers = require('./controllers/userControllers/userControllers')
const UsersControllers = require('./controllers/userControllers/userControllers')
const TasksControllers = require('./controllers/tasksControllers/tasksControllers')
const {PORT, APP_NAME} = require('./util/appConfig')


const users = new UsersControllers()
const tasks = new TasksControllers()


//========== ROTAS ==========

app.get('/quadros', function (req, res) {
    const quadro = {
        id: 1,
        id_Usuario: 1,
        id_tarefa: 1,
        nome_quadro: 'Sei lá' 
    }
    res.send(quadro)
})


app.get("/users", users.show)
app.post("/users", users.save)
//userControllers(app)


app.get("/tasks", tasks.show)
app.post("/tasks", tasks.save)





app.listen(PORT, console.log(`${APP_NAME} rodando na porta 3000`))



// QUADRO 
//    Id 
//    Id_Usuario
//    Id_Tarefa
//    Nome_quadro
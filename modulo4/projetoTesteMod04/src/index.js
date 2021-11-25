const express = require('express')
const UserController = require('./controllers/userControllers/userController')
const TasksController = require('./controllers/tasksControllers/tasksControllers')
const {PORT, APP_NAME} = require('./util/appConfig')
const cors = require('cors')


const app = express()
// const users = new UsersController()
// const tasks = new TasksController()



//========== MIDDLEWARES ==========

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.headers.host, new Date().toDateString())
    next()
})



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


app.get("/users/:id", UserController.show)
app.get("/users", UserController.index)
app.post("/users", UserController.save)
app.delete('/users/:id', UserController.remove)
app.put('/users/:id', UserController.update)
//userControllers(app)


app.get("/tasks/:id", TasksController.show)
app.get("/tasks", TasksController.index)
app.post("/tasks", TasksController.save)
app.delete('/tasks/:id', TasksController.remove)
app.put('/tasks/:id', TasksController.update)



//========== PORTA ==========

app.listen(PORT, console.log(`${APP_NAME} rodando na porta 3000`))



// QUADRO 
//    Id 
//    Id_Usuario
//    Id_Tarefa
//    Nome_quadro
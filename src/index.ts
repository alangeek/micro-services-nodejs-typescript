import express from 'express'
import errorHandler from './middlewares/error-handler.middleware'
import statusRoute from './routes/status.routes'
import usersRoute from './routes/users.route'

const app = express()
const port = 3000

// Configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(usersRoute)
app.use(statusRoute)

// Configuração dps Handlers de Erro
app.use(errorHandler)


// Inicialização do servidor
app.listen(3000, () => {
  console.log(` Start serve on ${port}`)
})

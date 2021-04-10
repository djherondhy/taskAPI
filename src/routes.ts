import {Router, Request, Response} from 'express'

import { getTasks, saveTask, getTask, updateTask, finishedTask, removeTask } from './controller/TasksController'

const routes = Router()

routes.get('/', (request: Request, response: Response)=>{
    return response.json({
        message: "Hello World3"
    })
})

routes.get('/tasks', getTasks)//get = buscar dados
routes.get('/tasks/:id', getTask)
routes.post('/tasks', saveTask)//post = salvar daddos
routes.put('/tasks/:id', updateTask)//put = alterar dados
routes.patch('/tasks/:id', finishedTask)// patch = indicado para alterar um dado
routes.delete('/tasks/:id', removeTask)// patch = indicado para alterar um dado


export default routes
const request = require('supertest')
const app = require('../app')

describe('Testando To-do App', () => {
    it('Deve retornar as tarefas!', async() => {
        const response = await request(app).get('/api/tasks/')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
    })

    it('Deve criar uma nova tarefa!', async() => {
        const response = await request(app).post("/api/tasks").send({title: 'Nova Tarefa'})

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
        expect(response.body).toMatchObject({title: 'Nova Tarefa', completed: false})
    })

    it('Deve retornar um erro 400 se não houver titulo!', async () => {
        const response = await request(app).post('/api/tasks').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('error', 'Titulo é obrigatorio');
    })

    it('Deve atualizar a tarefa existente!', async () => {
        const {body: newTask } = await request(app).post('/api/tasks').send({title: 'Tasks Atualizada'})

        const response = await request(app).put(`/api/tasks/${newTask.id}`).send({title: "Task Atualizada", completed: true})
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({id: newTask.id, title: 'Task Atualizada'})
    })

    it('Deve deletar uma tarefa existente!', async () => {
        const {body: newTask} = await request(app).post(`/api/tasks`).send({title: 'Task Deletada'})

        const response = await request(app).delete(`/api/tasks/${newTask.id}`)

        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({id: newTask.id, title: 'Task Deletada'})
    })
})
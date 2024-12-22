const request = require("supertest");
const app = require("../app")

describe("Testando API", () =>{
	it("Deve retornar todos as tarefas com status 200", async ()=>{
		const response = await request(app).get("/api/users")

		expect(response.status).toBe(200)
		expect(response.body).toHaveProperty("tarefas")
		expect(response.body.tarefas).toHaveLength(3)
		expect(response.body.tarefas[0]).toEqual({id: 1, task: "Atividade 01 de Tests", complete: false})
		expect(response.body.tarefas[1]).toEqual({id: 2, task: "Atividade 02 de Tests", complete: false})
	})
})
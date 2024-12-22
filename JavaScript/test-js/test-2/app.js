const express = require("express");
const app = express();
app.use(express.json());
// const users = [
// 	{
// 		id : 1,
// 		name : "denis", 
// 		password :"1234"
// 	},
// 	{
// 		id: 2,
// 		name: "jaques", 
// 		password:"aaa"
// 	},
// ]

const tarefas = [
    {
        id: 1,
        task: "Atividade 01 de Tests",
        complete: false
    },
    {
        id: 2,
        task: "Atividade 02 de Tests",
        complete: false
    },
    {
        id: 3,
        task: "Atividade 03 de Tests",
        complete: false
    }
]

app.route("/api/todo") 
    .get((_, res) => {
        res.status(200).json({tarefas})
    })
    .post((req, res) => {
        const tarefa = req.body.tarefa;
        tarefas.push(tarefa);
        res.status(200).json({tarefa})
    })
    .put((req, res) => {
        
    })

module.exports = app;
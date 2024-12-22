const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const PORT = 3000

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Api MaisPraTI',
            version: '1.0.0',
            description: 'express, swaggerjsdc e ui-express'
        },
        servers: {
            url: `http://localhost:${PORT}`
        }
    },
    apis: ['./app.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json())
/**
* @swagger
* /api/items:
*   get:
*        summary: retorna a lista de items
*        reponses:
*            200:
*                description: uma lista de items
*                content:
*                    application/json:
*                        schema:
*                            type: array
*                            items:
*                                type: string
*/
app.get('/api/items', (req, res) => {
    const items = ['Notebook', 'Celular', 'Mouse']
    res.status(200).json(items)
})
/**
 * @swagger
 *  /api/items:
 *    post:
 *      summary: adiciona um novo item
 *      responses:
 *           201:
 *              description: Item adicionado com sucesso
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      item:
 *                          type: string
 *                          description: o nome do item a ser adicionado
 *     
 *  
 */


app.post('/api/items', (req, res) => {
    const {item} = req.body

    res.status(201).json({message: `item ${item} adicionado com sucesso!`})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
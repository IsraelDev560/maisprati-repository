# Como Criar um Usuário

Para criar um usuário no backend, siga estas etapas:

1. <strong>Certifique-se de que o backend esteja em execução:</strong> Antes de criar um usuário, verifique se o servidor está ativo. Inicie o servidor se ainda não estiver em execução:
```bash
cd multi-app/backend
node server.jsx
```
2. <strong>Acesse o endpoint de criação de usuário:</strong> Você pode criar um usuário enviando uma requisição POST para o endpoint /users. Use uma ferramenta de teste de API, como Postman, ou um cliente HTTP como curl.

#### Endpoint para criar um usuário:

```http
POST http://localhost:5000/register
```
3. <strong>Prepare o corpo da requisição:</strong> Envie um corpo JSON com os dados necessários para criar um usuário. Exemplo:
```json
{
  "name": "Nome do Usuário",
  "password": "senha"
}
```

4. <strong>Exemplo de requisição com curl:</strong> Se preferir usar curl, a requisição ficaria assim:

```bash
    curl -X POST http://localhost:5000/register 
    -H "Content-Type: application/json" 
    -d '{"name": "admin", "password": "password"}'
```

5. <strong>Verifique a resposta:</strong> O servidor deve responder com uma confirmação de que o usuário foi criado com sucesso. A resposta normalmente incluirá um status HTTP 201 (Created) e os detalhes do usuário criado.

## Observações
- Validação: Certifique-se de que os dados enviados estejam de acordo com as regras de validação definidas no backend (por exemplo, email válido e senha com um mínimo de caracteres).
- Autenticação: Se o endpoint exigir autenticação, adicione o token de autenticação no cabeçalho da requisição.
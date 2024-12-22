module.exports = function (app) {

    app.get("/", (req, res) => {
        res.send("Hello, World!");
      });      

    app.get('/users/:id', (req, res) => {
        const filter = req.query.filter;

        const version = req.headers.version;

        return res.status(200).send("some data");
    });

    app.post('/users', (req, res) => {
        const { name, age, about } = req.body;

        return res.status(201).send();
    });

};
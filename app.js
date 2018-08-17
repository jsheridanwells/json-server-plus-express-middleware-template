const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const request = require('request');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/RetrieveTheThings', (req, res, next) => {
    let thingsUrl = 'http://localhost:3000/Things'
    request({ url: thingsUrl, json: true }, (err, response, body) => {
        res.send(body);
    });    
});

server.use(router);

server.listen(3000, () => {
    console.log('listening on :3000');
});

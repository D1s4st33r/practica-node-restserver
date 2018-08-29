require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuario', function (req, res){
        res.send('Hello Word');
})

app.post('/usuario', function (req, res) {
        let body = req.body;

        res.json({
                body
        })
        
})

app.put('/usuario/:id', function (req, res) {
        let id = req.params.id;
        res.send('Hello Word');
})

app.delete('/', function (req, res){
        res.send('Hello Word');
})

app.listen(process.env.PORT, () => {
        console.log('iniciando servidor... Puerto: '+process.env.PORT);
});
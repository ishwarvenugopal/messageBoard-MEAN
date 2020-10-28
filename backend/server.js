var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var messages = [{text: 'first message', owner: 'Tim'},{text: 'second message', owner:'Jane'}];


var api = express.Router();


api.get('/messages',(req,res)=>{
    res.json(messages);
})

api.get('/messages/:user',(req,res)=>{
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);
    res.json(result);
})

api.post('/messages',(req,res)=>{
    messages.push(req.body);
    res.json(req.body);
})

app.use('/api',api);

app.listen(3000);
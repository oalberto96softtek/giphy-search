var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const fetch = require('node-fetch')
var router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));

router.get('/', function(req, res){
    if(req.query.q){
        const query = req.query.q.trim().replace(" ", "+");
        fetch(
            `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=aZXgpGiZO33bT84CH1nEpxZVAV0OyG4y&limit=8`
        )
        .then(r => r.json())
        .then(json => {
            res.json(json);
        });
    } else {
        return res.json({});
    }
})

app.use('/', router);
app.listen(3000)
console.log('Server listening on 3000');

 
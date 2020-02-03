require("appdynamics").profile({
	controllerHostName: 'ada201912270634325.saas.appdynamics.com',
	controllerPort: 443,
	// If SSL, be sure to enable the next line
	controllerSslEnabled: true,
	accountName: 'ada201912270634325',
	accountAccessKey: '5is03mv5y1jc',
	applicationName: 'flashy_cards',
	tierName: 'giphy',
	nodeName: 'process' // The controller will automatically append the node name with a unique number
});
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
	//var waitTill = new Date(new Date().getTime() + 3 * 1000);
	//hile(waitTill > new Date()){}
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

 

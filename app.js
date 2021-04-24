const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get('/calculator' , (req,res)=>
{
    res.sendfile(__dirname+"/index.html");
});
app.use(express.static('public'));
app.post('/calculator' , (req,res)=>
{ let v1 = Number(req.body.weight);
    let v2 = Number(req.body.height);
    let sum = v1/(v2*v2);
    res.send(String(sum));
});

app.listen('3000' , (req,res)=>
{
    console.log('running at port 3000');
})
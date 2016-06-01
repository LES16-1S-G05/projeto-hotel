var express        = require('express');
var path           = require('path');
var fs             = require('fs');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var load           = require('express-load');
var Quarto = require('./models/quarto.js');


var app            = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res){
 res.sendfile( __dirname + "/index.html" );
})

app.post('/gravar', function(req, res){
  var numero    = req.body.numero;
  var valor     = req.body.valor;
  var situacao  = req.body.situacao;
  

   Quarto.gravar(numero, valor, situacao, function(err, quarto) {
     if (err) throw err; 
     else
      console.log('OK');
   });
 
    response = {
      numero:req.body.numero,
      valor:req.body.valor,
      situacao:req.body.situacao
    };
      console.log(response);
      res.end(JSON.stringify(response));
    });
   

app.listen(3000, function(){
  console.log("Server ativo em 3000")
})

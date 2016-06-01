var db = require('../lib/db');

var QuartoSchema = new db.Schema({
  numero: {type: Number},
  valor: Number,
  situacao: String
})

var Quarto = db.mongoose.model('quartos', QuartoSchema);

module.exports.gravar = gravar;

function gravar(numero, valor, situacao, callback) {
  var quarto 			= new Quarto();
  quarto.numero 	= numero;
  quarto.valor 		= valor;
  quarto.situacao = situacao;
  quarto.save(function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, quarto);
    }
  });
}

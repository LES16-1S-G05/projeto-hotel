var db = require('../lib/db');

var QuartoSchema = new db.Schema({
  numero: {type: Number},
  valor: {type: Number},
  situacao: String,
  categoria: String
})

var quarto = db.mongoose.model('Quartos', QuartoSchema);

module.exports.gravar = gravar;

}
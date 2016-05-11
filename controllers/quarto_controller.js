var quarto = app.models.quarto;

function gravar(numero, valor, situacao, categoria, callback) {
  var quarto = new Quarto();
  quarto.numero = numero;
  quarto.valor = valor;
  quarto.situacao = situacao;
  quarto.categoria = categoria;
  quarto.save(function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
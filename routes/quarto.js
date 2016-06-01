module.exports = function(app) {
	var quarto = app.controllers.quarto;
	app.get('/', quarto.index);
	
};
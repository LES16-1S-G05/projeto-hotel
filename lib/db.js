var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
connect();

function connect() {
  var url = 'mongodb://localhost:27017/hotel';
  mongoose.connect(url);
}
function disconnect() {
  mongoose.disconnect()
}
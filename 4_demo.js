var FileEnvio = require('./models/FileEnvio.js');

var FileEnvio = FileEnvio.FileEnvio ;

FileEnvio.findAll({
  where: {
    envio_id: 55
  }
}).then(function(result) {
    console.log(JSON.stringify(result))
}) ;


var Obj_FileEnvio = require('./models/FileEnvio.js');
var obj_Sms = require('./models/Sms.js');

var FileEnvio = Obj_FileEnvio.FileEnvio ;
var Sms = obj_Sms.Sms ;

sms.findAll({
  where: {
    id: 55
  }
}).then(function(result) {
    console.log(JSON.stringify(result))
}) ;


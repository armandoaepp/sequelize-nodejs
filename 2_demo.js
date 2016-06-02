var connection = require('./cnx.js');

var cnx       = connection.cnx ;
var Sequelize = connection.Sequelize ;

const FileEnvio = cnx.define('FileEnvio',
    {
         id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        envio_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        file_name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
         path_full: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        url: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        estado: {
            type: Sequelize.INTEGER(11),
            allowNull: true
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true
        }

    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'file_envio'
    }
);


/*FileEnvio.findById(2).then(function (data) {
   console.log(data);
  });
*/
/*FileEnvio.findAll().then(function (data) {
   console.log(data);
  });*/

FileEnvio.findAll({
  where: {
    envio_id: 55
  }
}).then(function(result) {
    console.log(JSON.stringify(result))
}) ;


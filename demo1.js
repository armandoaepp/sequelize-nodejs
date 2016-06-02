const Sequelize = require('sequelize')

const connection = new Sequelize(
    'db_sms',
    'root',
    '',
    {
        dialect: 'mysql',
        host: '127.0.0.1',
        logging: console.log,
        port: 3306,
        timezone: '-05:00',
        dialectOptions: {
            multipleStatements: true
        },
        pool: {
            max: 100,
            min: 0,
            idle: 10000
          },
    }
) ;


connection.sync() ;

const FileEnvio = connection.define('FileEnvio',
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


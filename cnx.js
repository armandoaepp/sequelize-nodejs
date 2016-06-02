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

module.exports = {
    cnx: connection,
    Sequelize: Sequelize,
}
var connection = require('./cnx.js');

var cnx       = connection.cnx ;
var Sequelize = connection.Sequelize ;

const Sms = cnx.define('Sms',
    {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        per_id_padre: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        envio_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        server_persona_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        sms_texto: {
            type: Sequelize.STRING(160),
            allowNull: false
        },
        sms_phone: {
            type: Sequelize.STRING(30),
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
        tableName: 'sms'
    }
);

module.exports = {
    Sms: Sms,
}


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete','root','root', {
        dialect: 'mysql', 
        host: 'db',
        port: '3306'
    }
);

module.exports = sequelize;
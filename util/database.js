// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node_complete','root','root', {
//         dialect: 'mysql', 
//         host: 'db',
//         port: '3306'
//     }
// );

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient
    .connect('mongodb+srv://nodelessons:nodelessons@node-lessons-wdsqh.mongodb.net/test?retryWrites=true')
    .then(client => {
        console.log('Connected!')
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err)
        throw err;
    });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
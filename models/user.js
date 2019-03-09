const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the user
      dbOp = db
        .collection('users')
        .updateOne({ _id: this._id }, { $set:  this });
    } else {
      // Insert a new one
      dbOp = db
        .collection('users')
        .insertOne(this);
    }
    return dbOp
      .then(result => console.log('Operation executed'))
      .catch(err => console.log(err));
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({_id: new mongodb.ObjectId(userId)})
      .then(user => {
        return user;
      })
      .catch(err => console.log(err));
  }
}

module.exports = User;
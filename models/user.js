const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
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

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id;
    // });
    
    const updatedCart = { items: [
      { productId: new mongodb.ObjectId(product._id), quantity: 1}
    ] };
    const db = getDb();
    return db.collection('users').updateOne(
      {_id: new mongodb.ObjectId(this._id)}, 
      {$set: { cart: updatedCart }}
    );
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
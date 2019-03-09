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
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];
    
    if (cartProductIndex >= 0) {
      // Already exists, so update the quantity
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      // Not inserted yet, so add new product with quantity equals one.
      updatedCartItems.push({ 
        productId: new mongodb.ObjectId(product._id), quantity: 1
      });
    }
    const updatedCart = { items: updatedCartItems };
    const db = getDb();
    return db.collection('users').updateOne(
      {_id: new mongodb.ObjectId(this._id)}, 
      {$set: { cart: updatedCart }}
    );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db.collection('products')
      .find({  _id: { $in: productIds }})
      .toArray()
      .then(products => {
        return products.map(p => {
          return { 
            ...p, 
            quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          }
        });
      });
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
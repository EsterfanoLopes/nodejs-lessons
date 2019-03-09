const db = require('../util/database');

const Cart = require ('../models/cart');

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
    [ this.title, this.price, this.imageUrl, this.description ]);
  }

  static deleteById(prodId) {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static finById(id) {
    return db.execute("SELECT * FROM products WHERE id = ?", [id]);
  }
};

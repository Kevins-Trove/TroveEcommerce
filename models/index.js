// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: "category_id",
    onDelete: "C"
});


// Categories have many Products
// Products belongsTo Category
Category.hasMany(Product{
  foreignKey: "category_id",
  onDelete: "CASCADE"
});
  
// Products belongToMany Tags (through ProductTag)
Product.hasMany(Product{
  foreignKey: "category_id",
  onDelete: "CASCADE"
})

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

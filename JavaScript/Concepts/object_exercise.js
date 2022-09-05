const product = {
  itemName: "Gold",
  price: 79999,
  discount: 3,
  itemCode: "GD-24-C ",
};
console.log(product);

//using factory function
function createProduct(name, price, discount, itemCode) {
  return {
    itemName: name,
    price: price,
    discount: discount,
    itemCode: itemCode,
  };
}

//creating an object of createProduct
const football = createProduct("football", 599, 6, "F-96");
console.log(football);

//using constructor

function Product(name, price, discount, itemCode) {
  this.itemName = name;
  this.price = price;
  this.discount = discount;
  this.itemCode = itemCode;
  //function to calculate discount
  this.discountValue = function discountValue(discount) {
    return (discount / 100) * price;
  };
}

const mobile = new Product("oneplus Nord", 35000, 7, "OP-22-N");
console.log(mobile);
console.log(mobile.discountValue);

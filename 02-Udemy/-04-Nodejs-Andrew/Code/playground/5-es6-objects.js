// Object property shorthand
const name = "Salah";
const userAge = 18;

const user = {
  name,
  age: userAge,
  location: "cairo",
};

console.log(user);

// Object destructuring
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: productlabel, stock } = product;

const transaction = function (type, { label, stock = 0 } = {}) {
  console.log(type, label, stock);
};

transaction("order", product);

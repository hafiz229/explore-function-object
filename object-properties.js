var computer = {
  price: 29000,
  storage: "500GB",
  processor: "Intel core i5",
  color: "black",
};

// get object property value
// console.log(computer.processor);
// var computerPrice = computer.price;
// console.log(computerPrice);

// set object property value
// computer.price = 22000;
// console.log(computer);

// different ways to set a value of an object property
computer.price = 22000;
computer["price"] = 23000;
var priceProperty = "price";
computer[priceProperty] = 25000;
console.log(computer);

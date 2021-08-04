function bringSingara(money) {
  console.log("Singara Price: ", money);
  var singaraPrice = 10;
  var singaraQuantity = money / singaraPrice;
  return singaraQuantity;
}

var totalSingara = bringSingara(100);
console.log("Total Singara: ", totalSingara);

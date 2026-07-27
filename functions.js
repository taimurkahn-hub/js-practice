
function currency (amount = 10, conversionRate = 270) {
  return amount * conversionRate;
}

console.log(`1 usd = ${270} so 10 usd = ${currency(10, 270)}`);


const currencyConverter = function (amount = 50 , conversionRate = 270) {
  return amount * conversionRate;
}
console.log(`1 usd = 270 so 50 USD = ${currencyConverter(50 , 270)} `)

const currencyConversion = (amount = 100 , conversionRate = 270) => {
  return amount * conversionRate;
}
console.log(`1 usd = 270 so 100 USD = ${currencyConversion()} `)
let conversionRate;
const currencyAlpha = (amount , currency ) => {
  
  if (currency == "usd"){
   conversionRate = 270 ;
  } else if (currency == "pkr") {
    conversionRate = 0.0036 ;
  }
  return amount * conversionRate;
}
console.log(`1 pkr = ${conversionRate} so ${320} pkr = ${currencyAlpha(320, "pkr")} ٴ`)

console.log(`1 pkr = ${conversionRate} so ${320} pkr = ${currencyAlpha(320, "pkr")} ٴ`)

console.log(currencyAlpha(50000, "pkr"));
console.log(currencyAlpha(89333, "pkr"));
console.log(currencyAlpha(533, "usd"));
console.log(currencyAlpha(5000, "usd"));


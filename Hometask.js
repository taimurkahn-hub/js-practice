//Home Task 01
const convertTempreture = (temp) => {
    temp = (temp*9/5)+32;
    return temp;
}
console.log (`${convertTempreture(40)} fahrenheit`)

// Task 02

const applyDiscount = function (price , DiscountPercentage) {
    const discountAmount = (DiscountPercentage * price) / 100;
    return price-discountAmount;
}
console.log(applyDiscount(1000 , 10))

// Task3 

function getInterestCatagory (creditScore){
    if(creditScore>=750){
        return "Low Risk"
    } else if(creditScore>=600){
        return "Medium Risk"
    } else if (creditScore<600){
        return "High Risk"
    }
}
console.log(getInterestCatagory(500))

//Task 04
const convertDistanceUnit = (distance) => distance = distance * 0.621 ;
console.log(convertDistanceUnit(20))

//task 05
function applyDiscount(price, discountPercent) {
  return price - (price * (discountPercent / 100));
}

const prices = [50, 100, 150, 200];
const discount = 20;

for (const p of prices) {
  const finalPrice = applyDiscount(p, discount);
  console.log(`Original: $${p} -> Discounted (${discount}%): $${finalPrice}`);
}

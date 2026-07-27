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
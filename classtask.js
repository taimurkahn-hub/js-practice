// Class Task 01 
function multiply (a,b){
    return a*b;
}
console.log(multiply(20,5));

const multiplication = (a,b) => a*b ;
console.log(multiplication(5,7))

//Class Task 02

const checkPassGrade = function (score) {
    if(score >=40){
        return true;
    } else {
        return false;
    }

}
console.log(checkPassGrade(30))

//Class Task 03

const fullForm = (weight) => {
    if (weight <= 2){
        return "light";
    } else if(weight <=10){
        return "medium";
    } else if (weight > 10) {
        return "heavy";
    }
}
console.log(fullForm(13))

//Class task 04

const Cubed = (Number) => Number*Number*Number;
const isPositive = (num) => num >= 0;
const toUpper = (name) => name.toUpperCase();
//Class Task 04
let price = 2000 ;
const discountCalculator = (price , isMember) => {
    if(isMember == true){
        return price - ((20*2000) / 100) ;
    } else {
        return price - ((5*2000)/100) ;
    }
}
console.log(discountCalculator(2000,true))
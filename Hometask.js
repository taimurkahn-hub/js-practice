const convertTempreture = (temp) => {
    temp = (temp*9/5)+32;
    return temp;
}
console.log (`${convertTempreture(40)} fahrenheit`)
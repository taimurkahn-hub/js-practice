function abc(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("value " + (i + 1) + ": " + arr[i]);
  }
}

abc(["test1", "test2", "test3"]);
console.log("*-----------Second Arr-----------*");
abc([1,2,3,4,5,6,76,89]);
console.log("*-----------Second Arr-----------*");
abc([0.1,0.5,0.6,0.7,1.85]);
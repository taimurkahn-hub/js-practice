const students = [
    {
        id : 1, 
        Name : "Taimur Khan",
        Marks : 40,
        Course : "Mern",

    },
        {
        id : 2, 
        Name : "Ahmed Khan",
        Marks : 67,
        Course : "Mern",

    },
        {
        id : 3, 
        Name : "Waqar Khan",
        Marks : 89,
        Course : "Mern",

    },
    {
        id : 4, 
        Name : "Waqas Khan",
        Marks : 25,
        Course : "Mern",

    },
]
const numbers = [1,2,3,4,5,6,7,8];
numbers.push("ABC");
console.log(numbers);
numbers.pop();
console.log(numbers);
let totalMarks = 0;
students.forEach((value , i) => {
    totalMarks = value.Marks +totalMarks;
    console.log(" index : " + i + " value : " ,value.Marks)
})
console.log(totalMarks);
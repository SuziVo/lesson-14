// 1. შექმენით 5 ელემენტიანი რიცვების მასივი, 
// console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;

let myArr=[1,2,3,4,5];

console.log(myArr.length);

// 2. შექმენით 5 ელემენტიანი მასივი, 
// რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.

let myArr2=[
    {
        userName:'nino',
        userAge:18,
    },
    {
        userName:"mariam",
        userAge:23,
    },
    {
        userName:"giorgi",
        userAge:21,
    },
    {
        userName:"lasha",
        userAge:34,
    },
    {
        userName:"lika",
        userAge:44,
    },

];

console.log( myArr2)


// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// address - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი

let myObject={
    firstName:"suzi",
    lastName:"voskanian",
    address:["mesxishvili","kostava"],
    age:23,
    phoneNumbers:[555444333,555777888]
};
console.log(myObject)

// 4. console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", 
// My age is (#3 დავალების age-ის მნიშვნელობა)", 
// "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"


console.log("my name is " + myObject.firstName);
console.log("my age is " + myObject.age);
console.log("my adress is " + myObject.address[0]);
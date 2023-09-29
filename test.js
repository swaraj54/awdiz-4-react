
// var myNumber = 3;
// console.log(myNumber)
// myNumber = 5;
// console.log(myNumber)



// const [speaks, dinesh] = useState({ name: "", email: "", password: "" });
// console.log(speaks) // 0

// dinesh({ [name]: value })
// console.log(speaks) // 1

function Person(name, age, number) {
    console.log(name, age, number)
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    myAge() {
        console.log(`Hello my age is ${this.age}`)
    }
}
const john = new Person('John', 30);
john.sayHello(); // logs "Hello, my name is John and I am 30 years old."
john.myAge();
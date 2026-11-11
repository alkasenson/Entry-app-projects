// 1.
// 1.number
let age = 26;
console.log(typeof age);
// output: number

// 2.string
let name = "alka";
console.log(typeof name);
// output: string

// 3.boolean
let isFemale = true;
console.log(typeof isFemale);
// output: boolean

// 4.undefined
let sample;
console.log(typeof sample);
// output: undefined

// 5.null
let value = null;
console.log(typeof value);
// output: object

// 6.bigInt
let num = 234567987654n;
console.log(typeof num);
// output: bigint

// 7.object
const details = {
    name: "alka",
    age:27,
    role: "student"
}
console.log(typeof details);
// output: object


// 2.
const user = { name: 'Alice' };
// user = { name: 'Bob' };
// console.log(user);
// TypeError: Assignment to constant variable. (cannot reassign value to the same variable if we are using const). So storing by vaue is not possible.
user.name = 'Bob';
console.log(user);
// output: { name: 'Bob' } // Here we are storing by reference

// const prevents reassignment of the variable, but allows modification of the properties inside an object.
// 3.

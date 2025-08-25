//nn bb ss u
// let a = 10;
// let b = null;
// let c = true;
// let d = BigInt("567");
// let e = "javasript";
// let i = "javasript";
// let f = Symbol("js");
// let h = Symbol("js");
// let g;
// console.log(a, b, c, d, e, f, g);

// console.log(e == i);
// console.log(f == h);
// console.log(typeof h);

// console.log(BigInt("567") + BigInt("3"));




// console.log("mirali")

// //non primitive type
// const arr = [1, 2, 3, 4];
// const arr2 = ["hello", "hii"];
// console.log(arr[2]);
// const user = {
//     username: "mirali",
//     age: 25,
//     isstudent: true,
//     hobbies: ["reading", "dancing"],
//     "email add": "text$text.com",
// };
// console.log(user.age);
// console.log(user["isstudent"]);
// console.log(user["email add"]);

// function sum() {
//     return 5 + 5;
// }
// const result = sum();
// console.log(result);



/*task 2*/
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];
let output = students.map((a) => {
  let total = a.scores.reduce((sum, scores) => sum + scores, 0);
  return { name: a.name, total: total };
});

let result = output.filter((a) => a.total > 250);

console.log(result);


/*task 3*/
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
let Age = input.map((b) => b.age);
console.log(Age);
let max = Math.max(...Age);
console.log(max);
let min = Math.min(...Age);
console.log(min);
let diff = max - min;
console.log(diff);

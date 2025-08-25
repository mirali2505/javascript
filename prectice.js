// const students = [
//     { name: "Ayaan", marks: 75 },
//     { name: "Sara", marks: 92 },
//     { name: "Rahul", marks: 68 },
//     { name: "Meena", marks: 88 }
// ];

// for (let i = 0; i <= students.length; i++) {
//     if (students[i].marks >= 80) {
//         console.log(students[i].name);

//     }
// }

// const school = {
//   name: "Sunrise High School",
//   address: {
//     city: "Junagadh",
//     state: "Gujarat",
//   },
//   classes: [
//     {
//       grade: 10,
//       students: [
//         { name: "Ayaan", marks: { math: 82, science: 76 } },
//         { name: "Sara", marks: { math: 95, science: 89 } }
//       ]
//     },
//     {
//       grade: 11,
//       students: [
//         { name: "Rahul", marks: { math: 78, science: 85 } },
//         { name: "Meena", marks: { math: 88, science: 92 } }
//       ]
//     }
//   ]
// };

// for(const clas of school.classes){
//   for(const stud of clas.students){
//     const marks=Object.entries(stud.marks);
//     console.log("grade"+clas.grade+"-"+stud.name+":"+marks);

//   }
// }

// const users = [
//   { name: 'Alice', age: 30, active: true },
//   { name: 'Bob', age: 25, active: false },
//   { name: 'Charlie', age: 30, active: true },
//   { name: 'David', age: 25, active: true }
// ];

let subJectMark = { java: 90, python: 92, c: 89, react: 99 };
function result(mark) {
  let sum = 0;
  const arrOfMark = Object.value(mark);
  console.log(arrOfMark);
  for (let i = 0; i < arrOfMark.length; i++) {
    sum += arrOfMark[i];
  }
  console.log({ sum });
  const precentage = (sum * 100) / (arrOfMark.length * 100);
  return precentage;


}








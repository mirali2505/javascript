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

const school = {
  name: "Sunrise High School",
  address: {
    city: "Junagadh",
    state: "Gujarat",
  },
  classes: [
    {
      grade: 10,
      students: [
        { name: "Ayaan", marks: { math: 82, science: 76 } },
        { name: "Sara", marks: { math: 95, science: 89 } }
      ]
    },
    {
      grade: 11,
      students: [
        { name: "Rahul", marks: { math: 78, science: 85 } },
        { name: "Meena", marks: { math: 88, science: 92 } }
      ]
    }
  ]
};

for(const clas of school.classes){
  for(const stud of clas.students){
    const marks=Object.entries(stud.marks);
    console.log("grade"+clas.grade+"-"+stud.name+":"+marks);
    
  }
}





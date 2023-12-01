import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

const course = new HolbertonCourse("PHP", 20, ["Lucie", "Guillaume"]);
course.name = "PHP2";
course.length = 10;
course.students = ["Thomas"];

console.log(course.name);
console.log(course.length);
console.log(course.students);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

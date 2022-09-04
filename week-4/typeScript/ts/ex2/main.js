"use strict";
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        let avg = 0;
        this.grades.forEach((g) => avg += g);
        return avg / this.grades.length;
    }
}
const s1 = new Student("or", 27, [100, 0]);
const s2 = new Student("Mor", 27, [100, 0, 50]);
const s3 = new Student("Dor", 27, [100, 0, 100]);
console.log(s1.getGradeAvg());
console.log(s2.getGradeAvg());
console.log(s3.getGradeAvg());

class Student{
    name:string;
    age:number;
    grades: number[]
    constructor(name:string, age:number, grades:number[]){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(grade:number) :void{
        this.grades.push(grade);
    }

    getGradeAvg():number{
        let avg:number = 0;
        this.grades.forEach((g)=> avg += g);
        return avg / this.grades.length;
    }
}

const s1:Student = new Student("or", 27, [100,0]);
const s2:Student = new Student("Mor", 27, [100,0, 50]);
const s3:Student = new Student("Dor", 27, [100,0, 100]);

console.log(s1.getGradeAvg());
console.log(s2.getGradeAvg());
console.log(s3.getGradeAvg());

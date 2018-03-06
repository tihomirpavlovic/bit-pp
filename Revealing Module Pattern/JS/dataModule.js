// Subject constructor

function Subject(subjectName) {
    this.subjectName = subjectName;
}

Subject.prototype.getSubjectName = function() {
    return this.subjectName;
}


// Student constructor
function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function() {
    return this.name + this.surname;
}


// Exam constructor 
function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function() {
    return this.student.getStudentData() + " " + this.subject.getSubjectName();
}

Exam.prototype.hasPassed = function() {
    if (this.grade > 5) {
        return "PASSED";
    } else {
        return "FAILED";
    }
}
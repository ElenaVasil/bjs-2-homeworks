function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  let marks = [];
  if(this.marks === undefined){ 
    this.marks = [mark]; 
  } else {
      this.marks.push(mark);
    }
}
Student.prototype.addMarks = function (...marks) {
  this.marks = marks;
}
Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach((mark) => {
    sum += mark;
  })
  // for (let i=0; i< this.marks.length; i++) {
  //   sum += this.marks[i];
  // }
  return (sum/this.marks.length);
}
Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}



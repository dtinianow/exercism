var School = function() {
  this.studentsPerGrade = {};
};

School.prototype.roster = function() {
  return this.studentsPerGrade;
};

School.prototype.add = function(student, grade) {
  if (this.studentsPerGrade[grade]) {
    this.studentsPerGrade[grade].push(student);
    this.studentsPerGrade[grade].sort();
  } else {
    this.studentsPerGrade[grade] = [student]
  };
};

School.prototype.grade = function(grade) {
  if (this.studentsPerGrade[grade]) {
    return this.studentsPerGrade[grade]
  } else {
    return [];
  };
};

module.exports = School;

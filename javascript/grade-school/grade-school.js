var School = function() {
  this.students = {};
};

School.prototype.roster = function() {
  return this.students;
};

School.prototype.add = function(student, grade) {
  this.students[grade] = this.students[grade] || [];
  this.students[grade].push(student);
  this.students[grade].sort();
};

School.prototype.grade = function(grade) {
  return this.students[grade] || [];
};

module.exports = School;

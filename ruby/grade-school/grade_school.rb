class School
  attr_reader :enrollment

  def initialize
    @enrollment = Hash.new { |h, k| h[k] = [] }
  end

  def students(grade)
    enrollment[grade].sort
  end

  def add(name, grade)
    enrollment[grade] << name
  end

  def students_by_grade
    enrollment.sort.map do |grade, students|
      { grade: grade, students: students.sort }
    end
  end
end

module BookKeeping
  VERSION = 3
end

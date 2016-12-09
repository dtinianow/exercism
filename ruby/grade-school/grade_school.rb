class School
  def initialize
    @enrollment = Hash.new { |h, k| h[k] = [] }
  end

  def students(grade)
    enrollment[grade]
  end

  def add(name, grade)
    enrollment[grade].push(name).sort!
  end

  def students_by_grade
    enrollment.keys.sort.map { |i| { grade: i, students: enrollment[i] } }
  end

  private

  attr_reader :enrollment
end

module BookKeeping
  VERSION = 3
end

class Year
  def initialize(year)
    @year = year
  end

  def self.leap?(year)
    new(year).leap?
  end

  def leap?
    divisible_by?(4) unless divisible_by?(100) && !divisible_by?(400)
  end

  private

  attr_reader :year

  def divisible_by?(num)
    (year % num).zero?
  end
end

class BookKeeping
  VERSION = 2
end

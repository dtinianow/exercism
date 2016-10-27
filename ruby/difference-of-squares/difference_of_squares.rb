module BookKeeping
  VERSION = 3
end

class Squares
  attr_reader :number

  def initialize(number)
    @number = number
  end

  def square_of_sum
    total = 0
    (number).downto(1) do |i|
      total += i
    end
    total ** 2
  end

  def sum_of_squares
    total = 0
    (number).downto(1) do |i|
      total += i ** 2
    end
    total
  end

  def difference
    (sum_of_squares - square_of_sum).abs
  end
end

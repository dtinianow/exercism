class SumOfMultiples
  def initialize(*multiples)
    @multiples = multiples
  end

  def to(limit)
    (1...limit).reduce(0) do |sum, num|
      sum += num if multiples.any? { |multiple| is_multiple?(num, multiple) }
      sum
    end
  end

  private

  attr_reader :multiples

  def is_multiple?(num, multiple)
    (num % multiple).zero?
  end
end

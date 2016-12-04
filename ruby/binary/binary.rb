class Binary
  BINARY_BASE = 2

  def initialize(input)
    validate(input)
    @digits = reformat(input)
  end

  def to_decimal
    digits.each_with_index.reduce(0) do |acc, (digit, index)|
      acc += digit.to_i * (BINARY_BASE) ** index
    end
  end

  private

  attr_reader :digits

  def validate(input)
    raise ArgumentError if input =~ /[^01]/i
    input
  end

  def reformat(input)
    input.split('').reverse
  end
end

module BookKeeping
  VERSION = 2
end

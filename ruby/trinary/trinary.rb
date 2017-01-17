class Trinary
  DEFAULT_OUTPUT = 0

  attr_reader :digits

  def initialize(digits)
    @digits = digits
  end

  def to_decimal
    return DEFAULT_OUTPUT if invalid_digits?

    formatted_digits.each_with_index.inject(0) do |sum, (digit, index)|
      sum + convert_to_trinary(digit, index)
    end
  end
end

private

def convert_to_trinary(digit, index)
  digit.to_i * (3**index)
end

def formatted_digits
  digits.reverse.split('')
end

def invalid_digits?
  digits.match(/[^0-2]/)
end

module BookKeeping
  VERSION = 1
end

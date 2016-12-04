class Binary

  def initialize(input)
    @digits = validate(input)
  end

  def to_decimal
    acc = 0
    parsed_digits.each_with_index { |num, i| acc += num.to_i * (2 ** i) }
    acc
  end

  private

  attr_reader :digits

  def validate(input)
    raise ArgumentError if input =~ /[a-z2-9 ]/i
    input
  end

  def parsed_digits
    digits.split('').reverse
  end
end

module BookKeeping
  VERSION = 2
end

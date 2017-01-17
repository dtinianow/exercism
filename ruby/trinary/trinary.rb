class Trinary
  attr_reader :input

  def initialize(input)
    @input = input
  end

  def to_decimal
    return 0 if invalid_input?
    input.reverse.split('').each_with_index.inject(0) do |sum, (value, index)|
      sum + value.to_i * (3**index)
    end
  end
end

private

def invalid_input?
  input.match(/[^0-2]/)
end

module BookKeeping
  VERSION = 1
end

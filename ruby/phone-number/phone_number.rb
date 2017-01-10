class PhoneNumber
  attr_reader :input

  def initialize(input)
    @input = input
  end

  def number
    return '0000000000' if contains_alphabetic_chars?(input)
    number = replace_non_numbers(input)
    validate(number)
  end

  def area_code
    number.slice(0..2)
  end

  def to_s
    n = number
    "(#{n.slice(0..2)}) #{n.slice(3..5)}-#{n.slice(6..9)}"
  end

  private

  def validate(number)
    if number.length == 10
      number
    elsif number.length == 11 && number[0] == '1'
      number.slice(1,10)
    else
      '0000000000'
    end
  end

  def contains_alphabetic_chars?(input)
    !(input =~ /[a-zA-Z]/).nil?
  end

  def replace_non_numbers(number)
    input.gsub(/\D/, '')
  end
end

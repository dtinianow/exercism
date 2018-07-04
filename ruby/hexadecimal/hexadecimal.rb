require 'pry'
class Hexadecimal
    CONVERSION = 
    {
        '0' => 0, 
        '1' => 1, 
        '2' => 2, 
        '3' => 3, 
        '4' => 4,
        '5' => 5,
        '6' => 6,
        '7' => 7,
        '8' => 8,
        '9' => 9,
        'a' => 10,
        'b' => 11,
        'c' => 12,
        'd' => 13,
        'e' => 14,
        'f' => 15
    }

    attr_reader :input

    def initialize(input)
        @input = input
    end

    def to_decimal
        input.reverse.chars.each_with_index.inject(0) do |sum, (char, index)|
            return 0 unless CONVERSION[char]
            sum += CONVERSION[char] * (16 ** index)
        end
    end
end
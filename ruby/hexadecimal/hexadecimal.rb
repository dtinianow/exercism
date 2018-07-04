require 'pry'
class Hexadecimal
    HEX_LETTERS = Hash[('a'..'f').zip(10..15)].freeze

    attr_reader :input

    def initialize(input)
        @input = input
    end

    def to_decimal
        return 0 if input.match(/[^a-f\d]/) 
        
        input.reverse
            .chars
            .each_with_index
            .inject(0) do |sum, (char, index)|
                sum += (HEX_LETTERS[char] || char.to_i) * (16 ** index)
        end
    end
end
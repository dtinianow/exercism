class Anagram
  attr_reader :input

  def initialize(raw_input)
    @input = raw_input.downcase
  end

  def match(words)
    target = alphabetize(input)
    words.select { |word| anagram?(word, target) }
  end

  private

  def alphabetize(word)
    word.downcase.split('').sort.join
  end

  def anagram?(word, target)
    alphabetic_match?(word, target) && distinct_from_input?(word)
  end

  def alphabetic_match?(word, target)
    alphabetize(word) == target
  end

  def distinct_from_input?(word)
    word.downcase != input
  end
end

module BookKeeping
  VERSION = 2
end

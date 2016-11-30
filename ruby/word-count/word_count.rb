class Phrase
  attr_reader :word_count, :words

  def initialize(phrase)
    @words = parse(phrase)
  end

  def parse(phrase)
    words = phrase.downcase.scan(/\b[\w']+\b/)
  end

  def word_count
    words.reduce(Hash.new(0)) do |word_count, word|
      word_count[word] += 1
      word_count
    end
  end
end

module BookKeeping
  VERSION = 1
end

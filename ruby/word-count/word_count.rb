class Phrase
  attr_reader :word_count, :words

  def initialize(phrase)
    @words = parse(phrase)
  end

  def parse(phrase)
    words = phrase.downcase.gsub(/[.:!&@$%^&]/,'').split(/[\s,]+/)
    remove_outer_quotes(words)
  end

  def remove_outer_quotes(words)
    words.map do |word|
      word = word [1...-1] if word[0] == "'" && word[-1] == "'"
      word
    end
  end

  def word_count
    words.reduce({}) do |word_count, word|
      word_count[word] += 1 if word_count[word]
      word_count[word] = 1 if word_count[word].nil?
      word_count
    end
  end
end

module BookKeeping
  VERSION = 1
end

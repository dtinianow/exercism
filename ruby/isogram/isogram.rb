class Isogram
  def self.is_isogram?(input)
    letters = input.downcase.gsub(/[^a-z]/, '').chars
    letters.length == letters.uniq.length
  end
end

module BookKeeping
  VERSION = 2
end

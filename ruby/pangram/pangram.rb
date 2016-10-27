class Pangram

  ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

  def self.is_pangram?(str)
    ALPHABET == str.downcase.scan(/[a-z]/).uniq.sort.join
  end
end

module BookKeeping
  VERSION = 2
end

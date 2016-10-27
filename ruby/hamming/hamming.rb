module BookKeeping
  VERSION = 3
end

class Hamming

  def self.compute(strand_a, strand_b)
    strand_a = strand_a.chars
    strand_b = strand_b.chars
    validate_equal_lengths(strand_a, strand_b)
    pairs = strand_a.zip(strand_b)
    distance(pairs)
  end

  def self.validate_equal_lengths(strand_a, strand_b)
    raise ArgumentError unless strand_a.length == strand_b.length
  end

  def self.distance(pairs)
    pairs.count { |char_a, char_b| char_a != char_b }
  end
end

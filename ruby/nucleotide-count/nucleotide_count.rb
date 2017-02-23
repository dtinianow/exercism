class Nucleotide
  def self.from_dna(strand)
    new(strand)
  end

  attr_reader :histogram

  def count(nucleotide)
    strand.count(nucleotide)
  end

  private

  attr_reader :strand

  def initialize(strand)
    validate(strand)
    @strand = strand
    @histogram = build_histogram
  end

  def validate(strand)
    raise ArgumentError if strand =~ /[^ACGT]/
  end

  def build_histogram
    histogram = { 'A' => 0, 'T' => 0, 'C' => 0, 'G' => 0 }
    strand.chars.each_with_object(histogram) { |char, obj| obj[char] += 1 }
  end
end

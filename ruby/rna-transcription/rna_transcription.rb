module BookKeeping
  VERSION = 4
end

class Complement
  DNA_TO_RNA = {
    "C" => "G",
    "G" => "C",
    "T" => "A",
    "A" => "U"
  }

  def self.of_dna(strand)
    return '' if strand.match(/[^GCTA]/)
    return convert_dna_to_rna(strand.split(""))
  end

  def self.convert_dna_to_rna(letter_array)
    letter_array.map { |letter| letter = DNA_TO_RNA[letter] }.join
  end
end

class Acronym
  def self.abbreviate(input)
    Acronym.new(input).abbreviate
  end

  attr_reader :input

  def initialize(input)
    @input = input
  end

  def abbreviate
    return acronym if acronym_exists?
    words = input.split(/[\W]+|(?=[A-Z])/)
    words.map { |word| word[0] }.join.upcase
  end

  private

  def acronym_exists?
    input.include?(':')
  end

  def acronym
    @input = input.split(':').first
  end
end

module BookKeeping
  VERSION = 2
end

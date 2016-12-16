class Series
  def initialize(digits)
    @digits = digits
  end

  def slices(count)
    raise ArgumentError if digits.length < count
    digits.chars.map(&:to_i).each_cons(count).to_a
  end

  private

  attr_reader :digits
end

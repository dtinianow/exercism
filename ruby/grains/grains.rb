class Grains
  TOTAL_SQUARES = 64

  def self.square(n)
    raise ArgumentError, "Must be between 1 and #{TOTAL_SQUARES}" if n < 1 || n > 64
    2 ** (n - 1)
  end

  def self.total
    (1..TOTAL_SQUARES).reduce(0) { |total, n| total += self.square(n) }
  end
end

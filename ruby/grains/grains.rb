class Grains
  TOTAL_SQUARES = 64

  def self.square(n)
    2 ** (n - 1)
  end

  def self.total
    (2 ** TOTAL_SQUARES) - 1
  end
end

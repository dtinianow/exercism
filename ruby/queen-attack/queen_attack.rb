class Queens
  def initialize(positions)
    @white = Position.new(positions[:white]) if positions[:white]
    @black = Position.new(positions[:black]) if positions[:black]
  end

  def attack?
    in_same_row? || in_same_column? || in_same_diagonal?
  end

  private

  attr_reader :white, :black

  def in_same_row?
    white.row == black.row
  end

  def in_same_column?
    white.column == black.column
  end

  def in_same_diagonal?
    (white.row - black.row).abs == (white.column - black.column).abs
  end
end

class Position
  attr_reader :row, :column

  def initialize(coordinates)
    raise ArgumentError if coordinates.any? { |x| x < 0 || x > 7 }
    @row = coordinates.first
    @column = coordinates.last
  end
end

module BookKeeping
  VERSION = 2
end
class Queens
    attr_reader :white, :black

    def initialize(white: nil, black: nil)
        @white = validate_position(white) if white
        @black = validate_position(black) if black
    end

    def validate_position(position)
        raise ArgumentError if position.any? { |p| p < 0 || p > 7 }
        position
    end

    def attack?
        in_same_row? || in_same_column? || in_same_diagonal?
    end

    private
    
    def in_same_row?
        white.first == black.first
    end

    def in_same_column?
        white.last == black.last
    end

    def in_same_diagonal?
        (white.first - black.first).abs == (white.last - black.last).abs
    end
end

module BookKeeping
    VERSION = 2
end
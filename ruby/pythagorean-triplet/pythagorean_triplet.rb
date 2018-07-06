class Triplet
    
    def self.where(max_factor:, min_factor: 1, sum: nil)
        x = [*min_factor..max_factor].combination(3)
            .map { |factors| new(*factors) }
            .select { |triplet| triplet.pythagorean? && (sum.nil? || triplet.sum == sum) }
    end

    attr_reader :a, :b, :c

    def initialize(a, b, c)
        @a = a
        @b = b
        @c = c
    end

    def sum
        a + b + c
    end

    def product
        a * b * c
    end

    def pythagorean?
        a**2 + b**2 == c**2
    end
end
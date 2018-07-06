class Triplet
    
    def self.where(max_factor:, min_factor: 1, sum: nil)   
        triplets = []
        (min_factor).upto(max_factor - 2) do |i|
            (i + 1).upto(max_factor) do |j|
                (j + 1).upto(max_factor) do |k|
                    triplet = new(i, j, k)
                    next if sum && sum != triplet.sum
                    triplets << triplet if triplet.pythagorean?
                end
            end
        end
        triplets
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
class Bst
    VERSION = 1
    attr_reader :data, :left, :right

    def initialize(data)
        @data = data
        @left = nil
        @right = nil
    end

    def insert(n)
        if (n <= data)
            left.nil? ? @left = Bst.new(n) : left.insert(n)
        elsif (n > data)
            right.nil? ? @right = Bst.new(n) : right.insert(n)
        end
    end

    def each
        return enum_for(:each) unless block_given?

        left.each { |n| yield n } if left
        yield data
        right.each { |n| yield n } if right
    end
end
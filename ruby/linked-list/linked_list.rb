require 'pry'
class Deque
    attr_reader :first, :last

    def initialize
        @first = @last = nil
    end

    def push(value)
        if last.nil?
            @first = @last = Node.new(value)
        else
            @last = last.next = Node.new(value, last, nil)
        end
    end

    def pop
        result = last

        if last
            @last = last.previous
            last.next = nil if last
        end

        @first = nil if first == result
        
        result.value
    end

    def shift
        result = first

        if first
            @first = first.next
            first.previous = nil if first
        end

        @last = nil if last == result

        result.value
    end

    def unshift(value)
        if first.nil?
            @first = @last = Node.new(value)
        else
            @first = first.previous = Node.new(value, nil, first)
        end
    end    
end


class Node
    attr_reader :value
    attr_accessor :next, :previous

    def initialize(value, previous_node = nil, next_node = nil)
        @value = value
        @previous = previous_node
        @next = next_node
    end
end
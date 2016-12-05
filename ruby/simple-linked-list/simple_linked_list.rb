class Element
  attr_reader :datum, :next

  def initialize(value, next_element = nil)
    @datum = value
    @next = next_element
  end

  def tail?
    @next.nil?
  end
end

class SimpleLinkedList
  attr_reader :size, :head

  def initialize
    @size = 0
    @head = nil
  end

  def empty?
    size.zero?
  end

  def push(value)
    @size += 1
    @head = Element.new(value, head)
  end

  def peek
    head.datum if head
  end

  def pop
    @size -= 1
    @head = head.next
    size + 1
  end

  def self.from_a(values)
    linked_list = new
    values.reverse.each { |datum| linked_list.push(datum) } unless values.nil?
    linked_list
  end

  def to_a
    values = []
    current_node = head
    until current_node.nil?
      values << current_node.datum
      current_node = current_node.next
    end
    values
  end

  def reverse
    SimpleLinkedList.from_a(to_a.reverse)
  end
end

class SimpleLinkedList
  attr_reader :size, :head

  def self.from_a(values)
    linked_list = new
    values.reverse_each { |datum| linked_list.push(datum) } if values
    linked_list
  end

  def initialize
    @size = 0
    @head = nil
  end

  def empty?
    size.zero?
  end

  def push(value)
    @head = Element.new(value, head)
    @size += 1
    self
  end

  def peek
    head.datum if head
  end

  def pop
    popped_head = head
    @head = head.next
    @size -= 1
    popped_head.datum
  end

  def each
    return enum_for(:each) unless block_given?
    current_node = head
    until current_node.nil?
      yield current_node.datum
      current_node = current_node.next
    end
  end

  def to_a
    each.to_a
  end

  def reverse
    each.with_object(SimpleLinkedList.new) { |datum, list| list.push(datum) }
  end

  alias << push
end

class SimpleLinkedList::Node
  attr_reader :datum, :next

  def initialize(value, next_element = nil)
    @datum = value
    @next = next_element
  end

  def tail?
    @next.nil?
  end
end

Element = SimpleLinkedList::Node

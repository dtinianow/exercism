class Proverb
  def initialize(*items, qualifier: "")
    @items = items
    @qualifier = qualifier.empty? ? "" : "#{qualifier} "
  end

  def to_s
    (consequences << conclusion).join("\n")
  end

  private

  attr_reader :items, :qualifier

  def consequences
    items.each_cons(2).map { |a, b| consequence(a, b) }
  end

  def consequence(item_a, item_b)
    "For want of a #{item_a} the #{item_b} was lost."
  end

  def conclusion
    "And all for the want of a #{qualifier}#{items.first}."
  end
end
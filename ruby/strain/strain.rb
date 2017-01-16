class Array
  def keep
    return enum_for(:keep) unless block_given?
    each_with_object([]) { |i, results| results << i if yield(i) }
  end

  def discard
    return enum_for(:discard) unless block_given?
    each_with_object([]) { |i, results| results << i unless yield(i) }
  end
end

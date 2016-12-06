class Array
  def accumulate
    return to_enum(:accumulate) unless block_given?
    results = []
    each { |i| results << yield(i) }
    results
  end
end

module BookKeeping
  VERSION = 1
end

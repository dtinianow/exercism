class Array
  def accumulate
    results = []
    raise 'No Block Given Error' unless block_given?
    each { |i| results << yield(i) }
    results
  end
end

module BookKeeping
  VERSION = 1
end

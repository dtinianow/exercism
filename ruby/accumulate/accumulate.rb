class Array
  def accumulate
    array = []
    self.each do |element|
      array << yield(element) if element.is_a? String
      array << element * element if element.is_a? Integer
    end
    array
  end
end

module BookKeeping
  VERSION = 1
end

class FlattenArray
  VERSION = 1

  def self.flatten(elements, output = [])
    elements.each do |element|
      if element.is_a? Array
        flatten(element, output)
      else
        output << element unless element.nil?
      end
    end
    output
  end
end

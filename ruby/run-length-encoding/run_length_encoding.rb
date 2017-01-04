class RunLengthEncoding
  def self.encode(input)
    output = ''
    chars = input.split('')
    previous = chars.first
    count = 0

    chars.each do |char|
      if char == previous
        count += 1
      else
        output += formatted_encoding(count, previous)
        count = 1
      end
      previous = char
    end
    output += formatted_encoding(count, previous)
    output
  end

  def self.decode(input)
    output = ''
    values = input.split('')
    current_num = ''

    values.each do |value|
      if value.to_i.nonzero?
        current_num += value
      else
        current_num = 1 if current_num == ''
        current_num.to_i.times do
          output += value
        end
        current_num = ''
      end
    end
    output
  end

  def self.formatted_encoding(count, char)
    count = '' if count == 1
    count.to_s + char
  end
end

module BookKeeping
  VERSION = 2
end

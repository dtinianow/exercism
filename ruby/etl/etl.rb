class ETL
  def self.transform(old_values)
    old_values.each_with_object({}) do |(points, letters), new_values|
      letters.each { |letter| new_values[letter.downcase] = points }
    end
  end
end

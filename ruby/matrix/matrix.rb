class Matrix
    attr_reader :rows, :columns

    def initialize(input)
        @rows = generate_rows(input)
        @columns = generate_columns(input)
    end

    private

    def generate_rows(input)
        input.split("\n").map do |row| 
            row.split(" ").map(&:to_i)
        end
    end

    def generate_columns(input)
        columns = []
        rows.each do |row|
            row.each_with_index do |value, i|
                columns[i] ||= []
                columns[i] << value
            end
        end
        columns
    end
end
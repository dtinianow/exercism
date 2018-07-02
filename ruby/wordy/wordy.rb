class WordProblem
    attr_reader :question

    OPERATORS = {
        "plus" => "+",
        "minus" => "-",
        "multiplied by" => "*",
        "divided by" => "/"
    }

    def initialize(question)
        @question = question
    end

    def answer
        validate_question
        answer = question.gsub("What is ", "").gsub("?", "")
        answer.gsub!(/#{OPERATORS.keys.join('|')}/, OPERATORS)
        eval answer
    end

    private

    def validate_question
        raise ArgumentError unless OPERATORS.keys.any? { |OPERATORS question.include? operator }
    end
end

module BookKeeping
    VERSION = 1
end
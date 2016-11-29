RubyVM::InstructionSequence.compile_option = {
  tailcall_optimization: true,
  trace_instruction: false
}

class Robot
  attr_reader :name
  @@used_names = []

  def initialize
    @name = generate_name
  end

  def reset
    @@used_names.delete(name)
    @name = generate_name
  end

  private

  def generate_name
    random_name = random_letters + random_numbers
    if @@used_names.include?(random_name)
      generate_name
    else
      @@used_names << random_name
      random_name
    end
  end

  def random_letters
    (0...2).map { (65 + rand(26)).chr }.join
  end

  def random_numbers
    rand(1000).to_s
  end
end


module BookKeeping
  VERSION = 2
end

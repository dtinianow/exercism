class Robot
  attr_reader :name
  @@used_names = []

  def initialize
    @name = get_name
  end

  def reset
    initialize
  end

  def get_name
    random_name = random_letters + random_numbers
    if @@used_names.include?(random_name)
      get_name
    else
      @@used_names << random_name
      random_name
    end
  end

private

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

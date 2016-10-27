module BookKeeping
  VERSION = 3
end

class Gigasecond

  GIGASECOND = 10**9

  def self.from(time)
    time + GIGASECOND
  end
end

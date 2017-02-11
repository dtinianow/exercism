class Clock
  HOURS = 24
  MINUTES = 60

  def self.at(hour, minute)
    new(hour, minute)
  end

  def to_s
    adjust_time
    "#{zero_pad(hour)}:#{zero_pad(minute)}"
  end

  def +(other)
    @minute += other
    self
  end

  def -(other)
    @minute -= other
    self
  end

  def ==(other)
    to_s == other.to_s
  end

  private

  attr_reader :hour, :minute

  def initialize(hour, minute)
    @hour = hour
    @minute = minute
  end

  def zero_pad(num)
    num.to_s.rjust(2, '0')
  end

  def adjust_hour
    @hour = hour % HOURS
  end

  def adjust_minute
    @hour += (minute / MINUTES)
    @minute = minute % MINUTES
  end

  def adjust_time
    adjust_minute
    adjust_hour
  end
end

module BookKeeping
  VERSION = 2
end

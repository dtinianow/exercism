class Game
  attr_reader :frames

  def initialize
    @frames = []
    start_new_frame
  end

  def roll(pins)
    raise BowlingError if pins < 0 || pins > 10
    raise BowlingError if !frames.last.strike? && frames.length != 10 && frames.last.rolls.reduce(0, :+) > 10
    if frames.length == 10 && frames.last.strike? && frames.last.rolls.length == 2 && frames.last.rolls[1] < 10
      raise BowlingError if pins >= 10
      raise BowlingError if frames.last.rolls[1] < 10 && frames.last.rolls[1] + pins > 10
    end

    if frames.length > 1 && frames[-2].strike? && frames[-2].bonus < 20
      frames[-2].add_bonus(pins)
    end
    if (frames.last.spare? || frames.last.strike?) && frames.length != 10
      frames.last.add_bonus(pins)
      start_new_frame
    elsif frames.last.open?
      start_new_frame
    end
    frames.last.add_roll(pins)
  end

  def score
    if frames.length == 10 && (frames.last.strike? || frames.last.spare?)
      raise BowlingError if frames.last.rolls.length < 3
    end
    raise BowlingError if frames.length != 10
    frames.reduce(0) { |sum, frame| sum + frame.points }
  end

  private

  def start_new_frame
    @frames << Frame.new
  end
end

class Frame
  attr_reader :rolls, :bonus

  def initialize
    @rolls = []
    @bonus = 0
  end

  def points
    rolls.reduce(0, :+) + bonus
  end

  def add_roll(pins)
    @rolls << pins
  end

  def add_bonus(pins)
    @bonus += pins
  end

  def strike?
    rolls.length > 0 && rolls.length < 3 && rolls.first == 10
  end

  def spare?
    rolls.length > 1 && rolls.length < 3 && rolls.first + rolls.last == 10
  end

  def open?
    rolls.length == 2 && rolls.first + rolls.last < 10
  end
end

class BowlingError < StandardError
end

module BookKeeping
  VERSION = 3
end

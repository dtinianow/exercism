class BeerSong
  def verse(num)
    first(num) + middle(num) + last(num - 1)
  end

  def verses(current, stop)
    song = ''
    while current > stop
      song += verse(current) + "\n"
      current -= 1
    end
    song += verse(current)
  end

  def lyrics
    verses(99, 0)
  end

  def first(num)
    bottles = 'bottles'
    bottles = 'bottle' if num == 1
    num = 'no more' if num == 0
    "#{num.to_s.capitalize} #{bottles} of beer on the wall, #{num} #{bottles} of beer.\n"
  end

  def middle(num)
    return 'Go to the store and buy some more, ' if num == 0
    quantity = 'one'
    quantity = 'it' if num == 1
    "Take #{quantity} down and pass it around, "
  end

  def last(num)
    bottles = 'bottles'
    bottles = 'bottle' if num == 1
    num = 'no more' if num == 0
    num = 99 if num == -1
    "#{num} #{bottles} of beer on the wall.\n"
  end
end

module BookKeeping
  VERSION = 2
end

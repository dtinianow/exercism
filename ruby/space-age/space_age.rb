class SpaceAge
  EARTH_YEAR_IN_SECONDS = 31557600
  ORBITAL_PERIOD = {
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }.freeze

  attr_reader :seconds

  def initialize(seconds)
    @seconds = seconds
  end

  def on_earth
    seconds.to_f / EARTH_YEAR_IN_SECONDS
  end

  def on_mercury
    on_earth / ORBITAL_PERIOD[:mercury]
  end

  def on_venus
    on_earth / ORBITAL_PERIOD[:venus]
  end

  def on_mars
    on_earth / ORBITAL_PERIOD[:mars]
  end

  def on_jupiter
    on_earth / ORBITAL_PERIOD[:jupiter]
  end

  def on_saturn
    on_earth / ORBITAL_PERIOD[:saturn]
  end

  def on_uranus
    on_earth / ORBITAL_PERIOD[:uranus]
  end

  def on_neptune
    on_earth / ORBITAL_PERIOD[:neptune]
  end
end

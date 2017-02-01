class SpaceAge
  EARTH_YEAR_IN_SECONDS = 31557600
  ORBITAL_PERIOD_RATIO = {
    earth: 1.0,
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

  ORBITAL_PERIOD_RATIO.keys.each do |planet|
    define_method "on_#{planet}" do
      send(:on, planet)
    end
  end

  def on(planet)
    seconds.to_f / EARTH_YEAR_IN_SECONDS / ORBITAL_PERIOD_RATIO[planet]
  end
end

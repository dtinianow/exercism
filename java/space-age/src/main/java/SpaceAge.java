import java.util.Map;
import java.util.HashMap;

public class SpaceAge {

    private static final long EARTH_YEAR_IN_SECONDS = 31557600;
    private static final Map<String, Double> orbitalPeriodInEarthYears = new HashMap<>();
    static {
        orbitalPeriodInEarthYears.put("Earth", 1.0);
        orbitalPeriodInEarthYears.put("Mercury", 0.2408467);
        orbitalPeriodInEarthYears.put("Venus", 0.61519726);
        orbitalPeriodInEarthYears.put("Mars", 1.8808158);
        orbitalPeriodInEarthYears.put("Jupiter", 11.862615);
        orbitalPeriodInEarthYears.put("Saturn", 29.447498);
        orbitalPeriodInEarthYears.put("Uranus", 84.016846);
        orbitalPeriodInEarthYears.put("Neptune", 164.79132);
    }
    private long seconds;

    public SpaceAge(int seconds) {
        this(Long.valueOf(seconds));
    }

    public SpaceAge(long seconds) {
        this.seconds = seconds;
    }

    public double getSeconds() {
        return (double)seconds;
    }

    public double onEarth() {
        return getSeconds() / EARTH_YEAR_IN_SECONDS;
    }

    public double onMercury() {
        return onEarth() / orbitalPeriodInEarthYears.get("Mercury");
    }

    public double onVenus() {
        return onEarth() / orbitalPeriodInEarthYears.get("Venus");
    }

    public double onMars() {
        return onEarth() / orbitalPeriodInEarthYears.get("Mars");
    }

    public double onJupiter() {
        return onEarth() / orbitalPeriodInEarthYears.get("Jupiter");
    }

    public double onSaturn() {
        return onEarth() / orbitalPeriodInEarthYears.get("Saturn");
    }

    public double onUranus() {
        return onEarth() / orbitalPeriodInEarthYears.get("Uranus");
    }

    public double onNeptune() {
        return onEarth() / orbitalPeriodInEarthYears.get("Neptune");
    }
}
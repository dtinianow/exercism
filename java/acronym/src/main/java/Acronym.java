import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Acronym {

    private final String phrase;

    public Acronym(String phrase) {
        this.phrase = phrase;
    }

    public String get() {
        return getAcronym();
    }

    private String getAcronym() {
        final StringBuilder acronym = new StringBuilder();
        final Pattern pattern = Pattern.compile("([A-Z]+[a-z]*)|([a-z]+)");
        final Matcher matcher = pattern.matcher(this.phrase);
        while (matcher.find()) {
            acronym.append(matcher.group().charAt(0));
        }
        return acronym.toString().toUpperCase();
    }
}
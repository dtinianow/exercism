import java.util.Random;
import java.util.List;
import java.util.ArrayList;

public class Robot {

    private static final List<String> usedNames = new ArrayList<>();
    private String name;

    public Robot() { reset(); }

    public String getName() { return name; }

    public void reset() { this.name = generateName(); }

    private String generateName() {
        String newName = newName();

        if (usedNames.contains(newName)) { return generateName(); }
        
        usedNames.add(newName);

        return newName;
    }

    private String newName() {
        return generateRandomValues(2, "char") + generateRandomValues(3, "int");
    }

    private String generateRandomValues(int quantity, String type) {
        String randomValues = "";

        for (int i = 0; i < quantity; i++) { randomValues += randomValue(type); }

        return randomValues;
    }

    private String randomValue(String type) {
        String value = "";

        if (type.equals("char")) { value += randomChar(); }
        if (type.equals("int")) { value += randomInteger(); }

        return value;
    }

    private char randomChar() {
        return (char)(new Random().nextInt(26) + (int)'A');
    }

    private int randomInteger() {
        return new Random().nextInt(10);
    }
}
import java.util.Map;
import java.util.LinkedHashMap;

public class RomanNumeral {

    private int arabicNumeral;
    private static final Map<Integer, String> conversion = new LinkedHashMap<>();
    static {
        conversion.put(1000, "M");
        conversion.put(900, "CM");
        conversion.put(500, "D");
        conversion.put(400, "CD");
        conversion.put(100, "C");
        conversion.put(90, "XC");
        conversion.put(50, "L");
        conversion.put(40, "XL");
        conversion.put(10, "X");
        conversion.put(9, "IX");
        conversion.put(5, "V");
        conversion.put(4, "IV");
        conversion.put(1, "I");
    }

    public RomanNumeral(int arabicNumeral) {
        this.arabicNumeral = arabicNumeral;
    }

    public String getRomanNumeral() {
        String romanNumeral = "";

        for (int currentValue : conversion.keySet()) {
            while (this.arabicNumeral >= currentValue) {
                romanNumeral += conversion.get(currentValue);
                this.arabicNumeral -= currentValue;
            }
        }

        return romanNumeral;
    }
}
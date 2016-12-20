public class PhoneNumber {

    String rawDigits;

    public PhoneNumber(String rawDigits) {
        this.rawDigits = rawDigits;
    }

    public String getNumber() {
        String digits = rawDigits.replaceAll("\\D", "");
        if (digits.length() == 10) { return digits; }
        if (digits.length() == 11 && digits.charAt(0) == '1') { return digits.substring(1); }
        return "0000000000";
    }

    public String getAreaCode() {
        return getNumber().substring(0, 3);
    }

    public String pretty() {
        String digits = getNumber();
        return "(" + digits.substring(0,3) + ") " + digits.substring(3,6) + "-" + digits.substring(6,10);

    }
}
import java.util.Map;
import java.util.HashMap;

public class Bob {
    private static final Map<String, String> response = new HashMap<>();
    static {
        response.put("default", "Whatever.");
        response.put("yell", "Whoa, chill out!");
        response.put("question", "Sure.");
        response.put("silence", "Fine. Be that way!");
    }

    public String hey(String comment) {
        if (isSilence(comment)) { return response.get("silence"); }
        if (isYelling(comment)) { return response.get("yell"); }
        if (isAQuestion(comment)) { return response.get("question"); }
        return response.get("default");
    }

    private boolean isYelling(String comment) {
        return comment.toUpperCase().equals(comment) && !comment.toLowerCase().equals(comment);
    }

    private boolean isAQuestion(String comment) {
        return comment.charAt(comment.length() - 1) == '?';
    }

    private boolean isSilence(String comment) {
        return comment.replaceAll("\\s+", "").equals("");
    }
}
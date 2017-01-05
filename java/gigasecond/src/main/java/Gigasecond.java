import java.time.LocalDateTime;
import java.time.LocalDate;

public class Gigasecond {

    private LocalDateTime date;
    private final static long GIGASECOND = (long)Math.pow(10, 9);

    public Gigasecond(LocalDateTime date) {
        this.date = addGigasecond(date);
    }

    public Gigasecond(LocalDate date) {
       this(date.atStartOfDay());
    }

    public LocalDateTime getDate() {
        return this.date;
    }

    private LocalDateTime addGigasecond(LocalDateTime dateTime) {
        return dateTime.plusSeconds(GIGASECOND);
    }

}
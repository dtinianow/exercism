import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.YearMonth;

public class Meetup {

    private final int month;
    private final int year;

    public Meetup(int month, int year) {
        this.month = month;
        this.year = year;
    }

    public LocalDate day(DayOfWeek dayName, MeetupSchedule schedule) {
        LocalDate current = YearMonth.of(this.year, this.month).atDay(1);

        switch (schedule) {
            case FIRST:
                return findNextDate(dayName, current);
            case SECOND:
                return findNextDate(dayName, current.plusWeeks(1));
            case THIRD:
                return findNextDate(dayName, current.plusWeeks(2));
            case FOURTH:
                return findNextDate(dayName, current.plusWeeks(3));
            case LAST:
                return findPreviousDate(dayName, current.withDayOfMonth(current.lengthOfMonth()));
            case TEENTH:
                return findNextDate(dayName, current.withDayOfMonth(13));
            default:
                return null;
        }
    }


    private LocalDate findNextDate(DayOfWeek dayName, LocalDate start) {
        LocalDate current = start;

        while (!dayName.equals(current.getDayOfWeek())) {
            current = current.plusDays(1);
        }

        return current;
    }

    private LocalDate findPreviousDate(DayOfWeek dayName, LocalDate start) {
        LocalDate current = start;

        while (!dayName.equals(current.getDayOfWeek())) {
            current = current.minusDays(1);
        }

        return current;
    }
}
import java.util.*;

class School {

    private final Map<Integer, List<String>> studentsPerGrade = new HashMap<>();
    private int totalStudents = 0;

    public int numberOfStudents() {
        return totalStudents;
    }

    public List<String> grade(int grade) {
        return studentsPerGrade.getOrDefault(grade, new ArrayList<>());
    }

    public void add(String name, int grade) {
        List<String> students = this.studentsPerGrade.get(grade);

        if (students == null) {
            students = new ArrayList<>();
            this.studentsPerGrade.put(grade, students);
        }
        students.add(name);
        this.totalStudents++;
    }

    public Map<Integer, List<String>> studentsByGradeAlphabetical() {
        Map<Integer, List<String>> sorted = this.studentsPerGrade;

        for (List<String> students : sorted.values()) {
            Collections.sort(students);
        }

        return new TreeMap<>(sorted);
    }
}
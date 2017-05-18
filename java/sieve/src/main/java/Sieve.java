import java.util.ArrayList;
import java.util.List;

public class Sieve {

    private final List<Integer> primes = new ArrayList<>();
    private int value;

    public Sieve(int value) {
        this.value = value;
    }

    public List<Integer> getPrimes() {
        if (value >= 2) {
            primes.add(2);
        }

        for (int i = 3; i < value; i += 2) {
             if (isPrime(i)) {
                 primes.add(i);
             }
        }

        return primes;
    }

    private boolean isPrime(int number) {
        return !primes.stream().anyMatch(prime -> number % prime == 0);
    }
}
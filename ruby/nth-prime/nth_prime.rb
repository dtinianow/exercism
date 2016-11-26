class Prime
  def self.nth(num)
    raise ArgumentError if num <= 0
    primes = [2]
    primes << 3 if num == 2
    i = 5
    while primes.length < num
      primes << i if primes.none? { |prime| i % prime == 0 }
      i += 2
    end
    primes.last
  end
end

module BookKeeping
  VERSION = 1
end

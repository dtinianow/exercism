class Sieve
  attr_reader :limit, :num_tracker

  def initialize(limit)
    @limit = limit
    @num_tracker = create_num_tracker
  end

  def primes
    return [] if limit < 2
    find_prime_numbers
  end
  
  def find_prime_numbers
    [*2..limit].each { |num| determine_non_primes(num, num_tracker) }
    retrieve_primes(num_tracker)
  end

  def determine_non_primes(num, num_tracker)
    increment = num
    while(num <= limit)
      num += increment
      num_tracker[num] = 'Not prime' if num <= limit
    end
  end

  def retrieve_primes(primes_identifier)
    primes = primes_identifier.find_all { |key, value| value == 'Prime' }
    primes.map { |prime| prime.first }
  end

  def create_num_tracker
    (2..limit).reduce({}) { |hash, num| hash[num] = 'Prime'; hash }
  end
end


module BookKeeping
  VERSION = 1
end

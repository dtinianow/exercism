class PrimeFactors
  def self.for(num)
    prime_factors = []
    factor = 2

    while num > 1
      if (num % factor).zero?
        prime_factors << factor
        num /= factor
      else
        factor += 1
      end
    end

    prime_factors
  end
end

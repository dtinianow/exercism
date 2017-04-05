class Crypto
  def initialize(message)
    @message = message
  end

  def normalize_plaintext
    @normalize_plaintext ||= @message.gsub(/\W/, '').downcase
  end

  def size
    @size ||= Math.sqrt(normalize_plaintext.size).ceil
  end

  def plaintext_segments
    @plaintext_segments ||= normalize_plaintext.scan(/.{1,#{size}}/)
  end

  def ciphertext
    ciphertext_segments.join('')
  end

  def normalize_ciphertext
    @normalize_ciphertext ||= ciphertext_segments.join(' ')
  end

  private

  def ciphertext_segments
    @ciphertext_segments ||= size.times.with_object([]) do |i, text|
      text << plaintext_segments.map { |segment| segment[i] }.join('')
    end
  end
end

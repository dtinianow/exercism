class Atbash
  CIPHER = [*"a".."z"].zip([*"a".."z"].reverse).to_h

  def self.encode(input)
    input.downcase
      .gsub(/[^a-z0-9]/, "")
      .chars
      .map { |char| CIPHER[char] || char }
      .join
      .scan(/.{1,5}/)
      .join(" ")
  end
end
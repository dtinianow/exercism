
class Bob
  def self.hey(remark)
    return 'Whoa, chill out!' if remark == remark.upcase && remark != remark.downcase
    return 'Sure.' if remark.end_with?('?')
    return 'Fine. Be that way!' if remark.strip == ''
    'Whatever.'
  end
end

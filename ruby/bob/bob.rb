class Bob
  RESPONSE = {
    yell:     'Whoa, chill out!',
    question: 'Sure.',
    silence:  'Fine. Be that way!',
    default:  'Whatever.'
  }.freeze

  def self.hey(remark)
    return RESPONSE[:yell]     if yell?(remark)
    return RESPONSE[:question] if question?(remark)
    return RESPONSE[:silence]  if silence?(remark)
    RESPONSE[:default]
  end

  def self.yell?(remark)
    remark == remark.upcase && remark != remark.downcase
  end

  def self.question?(remark)
    remark.end_with?('?')
  end

  def self.silence?(remark)
    remark.strip == ''
  end
end

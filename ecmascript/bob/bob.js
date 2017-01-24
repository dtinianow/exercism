class Bob {
  hey(message) {
    let responseType = 'default';

    if (this.is_question(message)) { responseType = 'question'; }
    if (this.is_yell(message)) { responseType = 'yell'; }
    if (this.is_silence(message)) { responseType = 'silence'; }
    
    return Bob.responses[responseType];
  }

  is_question(message) {
    return message.slice(-1) === '?';
  }

  is_yell(message) {
    return message === message.toUpperCase() && message !== message.toLowerCase();
  }

  is_silence(message) {
    return "" === message.replace(/\s+/, "");
  }
}

Bob.responses = {
  'default': 'Whatever.',
  'yell': 'Whoa, chill out!',
  'question': 'Sure.',
  'silence': 'Fine. Be that way!'
};

export default Bob;

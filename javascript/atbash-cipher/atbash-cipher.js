const PLAIN = 'abcdefghijklmnopqrstuvwxyz';
const CIPHER = 'zyxwvutsrqponmlkjihgfedcba';

function encode(input) {
  const message = input.toLowerCase().replace(/[\W]/g, '');
  let output = '';
  for (let i = 0; i < message.length; i++) {
    if (i % 5 === 0 && i !== 0) output += ' ';
    let index = PLAIN.indexOf(message[i]);
    index > -1 ? output += CIPHER[index] : output += message[i];
  }
  return output;
}

module.exports = { encode };

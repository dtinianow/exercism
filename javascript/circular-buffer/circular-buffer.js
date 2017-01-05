function circularBuffer (maxSize) {
  var buffer = [];

  function read() {
    if (buffer.length === 0) { throw bufferEmptyException(); }
    return buffer.shift();
  }

  function write(value) {
    if (buffer.length === maxSize) { throw bufferFullException(); }
    if (value) buffer.push(value);
  }

  function forceWrite(value) {
    if (buffer.length === maxSize) { read(); }
    write(value);
  }

  function clear() {
    buffer.length = 0;
  }

  return { read, write, clear, forceWrite };
}

function bufferEmptyException() {
  return {
    name:    "Buffer Empty Exception",
    message: "Cannot read from an empty buffer"
  }
}

function bufferFullException() {
  return {
    name: "Buffer Full Exception",
    message: "Cannot write to a full buffer"
  }
}

module.exports = { circularBuffer, bufferEmptyException, bufferFullException };

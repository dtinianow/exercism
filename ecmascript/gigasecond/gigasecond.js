class Gigasecond {
  constructor(input) {
    this.input = input;
  }

  static milliseconds() {
    return (10 ** 9) * 1000;
  }

  date() {
    return new Date(this.input.getTime() + Gigasecond.milliseconds());
  }
}

export default Gigasecond;

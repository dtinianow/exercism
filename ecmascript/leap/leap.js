const isLeapYear = year => {
  return divisibleBy4(year) && (!divisibleBy100(year) || divisibleBy400(year));
};

const divisibleBy4 = n => n % 4 === 0;

const divisibleBy100 = n => n % 100 === 0;

const divisibleBy400 = n => n % 400 === 0;

export default isLeapYear;

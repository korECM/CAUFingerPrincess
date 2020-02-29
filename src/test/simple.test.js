function leapYear(n) {
  if (n % 4 === 0) {
    if (n % 100 === 0) {
      if (n % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

test("2020년은 윤년이다 ", () => {
  expect(leapYear(2020)).toBe(true);
});

test("2019년은 윤년이 아니다", () => {
  expect(leapYear(2019)).toBe(false);
});
test("1900년은 윤년이 아니다", () => {
  expect(leapYear(1900)).toBe(false);
});

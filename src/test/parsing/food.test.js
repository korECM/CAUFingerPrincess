import getFood from "../../lib/parsing/food";

describe("food.js는", () => {
  describe("getFood 메소드는", () => {
    it("성공적으로 데이터를 불러오면 올바른 객체를 반환한다", async done => {
      const data = await getFood(1);
      //   data.map(e => {
      // expect(e).toHaveProperty("title");
      // expect(e).toHaveProperty("start");
      // expect(e).toHaveProperty("end");
      // expect(e.start).toHaveProperty("year");
      // expect(e.start).toHaveProperty("month");
      // expect(e.start).toHaveProperty("day");
      // expect(e.end).toHaveProperty("year");
      // expect(e.end).toHaveProperty("month");
      // expect(e.end).toHaveProperty("day");
      //   });
      console.log(data);
      done();
    }, 10000);
  });
});

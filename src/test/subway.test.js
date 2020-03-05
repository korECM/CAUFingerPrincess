import getSubway from "../lib/subway";

describe("subway.js", () => {
  describe("getSubway 메소드는", () => {
    describe("7호선 테스트", () => {
      it("도착 예정 시간을 오름차순으로 정렬해서 반환한다", async done => {
        let data = await getSubway(7);
        for (let index = 0; index < data.length - 1; index++) {
          const prev = data[index];
          const next = data[index + 1];
          expect(prev.time <= next.time).toBe(true);
        }
        done();
      }, 10000);
      it("프로퍼티 name, time, message 다 있다", async done => {
        let data = await getSubway(7);
        data.map(e => {
          expect(e).toHaveProperty("name");
          expect(e).toHaveProperty("time");
          expect(e).toHaveProperty("message");
        });
        done();
      }, 10000);
    });
    describe("9호선 테스트", () => {
      it("도착 예정 시간을 오름차순으로 정렬해서 반환한다", async done => {
        let data = await getSubway(9);
        for (let index = 0; index < data.length - 1; index++) {
          const prev = data[index];
          const next = data[index + 1];
          expect(prev.time <= next.time).toBe(true);
        }
        done();
      }, 10000);
      it("프로퍼티 name, time, message 다 있다", async done => {
        let data = await getSubway(9);
        data.map(e => {
          expect(e).toHaveProperty("name");
          expect(e).toHaveProperty("time");
          expect(e).toHaveProperty("message");
        });
        done();
      }, 10000);
    });
  });
});

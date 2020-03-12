import { getSubwayInfo, getFirstLast } from "../lib/subway";

describe("subway.js", () => {
  describe("getFirstLast 메소드는", () => {
    describe("평일, 휴일, 공휴일 3개의 요소를 가지고 그 속에 각 행의 첫차, 막차 즉 4개를 반환해야 한다.", () => {
      it("7호선", async done => {
        let data = await getFirstLast(7);
        expect(data).toHaveLength(3);
        data.map(e => {
          expect(e).toHaveLength(4);
          e.map(el => {
            expect(el.length > 0).toBe(true);
          });
        });
        done();
      }, 10000);
      it("9호선", async done => {
        let data = await getFirstLast(9);
        expect(data).toHaveLength(3);
        data.map(e => {
          expect(e).toHaveLength(4);
          e.map(el => {
            expect(el.length > 0).toBe(true);
          });
        });
        done();
      }, 10000);
    });
  });
});

describe("subway.js", () => {
  describe("getSubwayInfo 메소드는", () => {
    describe("7호선 테스트", () => {
      it("도착 예정 시간을 오름차순으로 정렬해서 반환한다", async done => {
        let data = await getSubwayInfo(7);
        for (let index = 0; index < data.length - 1; index++) {
          const prev = data[index];
          const next = data[index + 1];
          expect(prev.time <= next.time).toBe(true);
        }
        done();
      }, 10000);
      it("프로퍼티 name, time, message 다 있다", async done => {
        let data = await getSubwayInfo(7);
        data.map(e => {
          expect(e).toHaveProperty("name");
          expect(e).toHaveProperty("time");
          expect(e).toHaveProperty("message");
          expect(e).toHaveProperty("last");
        });
        done();
      }, 10000);
    });
    describe("9호선 테스트", () => {
      it("도착 예정 시간을 오름차순으로 정렬해서 반환한다", async done => {
        let data = await getSubwayInfo(9);
        for (let index = 0; index < data.length - 1; index++) {
          const prev = data[index];
          const next = data[index + 1];
          expect(prev.time <= next.time).toBe(true);
        }
        done();
      }, 10000);
      it("프로퍼티 name, time, message 다 있다", async done => {
        let data = await getSubwayInfo(9);
        data.map(e => {
          expect(e).toHaveProperty("name");
          expect(e).toHaveProperty("time");
          expect(e).toHaveProperty("message");
          expect(e).toHaveProperty("last");
        });
        done();
      }, 10000);
    });
  });
});

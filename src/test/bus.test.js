import { getBusInfo } from "../lib/bus";

describe("subway.js", () => {
  describe("getBusInfo 메소드는", () => {
    describe("뭘 테스트 하지", () => {
      it("중앙대 중문", async done => {
        let data = await getBusInfo(20205);
        console.log(data);
        expect(data.length).toBeGreaterThan(0);
        data.map(e => {
          expect(e).toHaveProperty("message");
          expect(e.message.length).toBeGreaterThan(0);
          expect(e).toHaveProperty("name");
        });
        // console.log(data);
        done();
      }, 10000);
    });
    it("번호 잘못 보냈을 때", async done => {
      // let data = await getBusInfo(2);
      expect(() => getBusInfo(2).toThrowError());
      done();
    }, 10000);
  });
});

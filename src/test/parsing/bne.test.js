import getBne from "../../lib/parsing/bne";

describe("bne.js의 makePostRequest는", () => {
  it("데이터를 가져오는데 성공하면 올바른 객체 형태로 반환한다", async done => {
    const data = await getBne();
    data.map(e => {
      expect(data.length).toBeGreaterThan(0);
      expect(e).toHaveProperty("title");
      expect(e).toHaveProperty("link");
      expect(e).toHaveProperty("date");
    });
    done();
  });

  // it("성공적으로 데이터를 불러오지 못하면 에러를 발생시킨다", () => {
  //   const axiosMock = {};
  //   axiosMock.post = () => {
  //     return new Promise((resolve, reject) => {
  //       reject();
  //     });
  //   };
  //   const api = new bneAPI(axiosMock);
  //   expect(() => api.getBne().toThrow());
  // });
});

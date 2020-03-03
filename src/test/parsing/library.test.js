import getLibrary from "../../lib/parsing/library";

describe("library.js의 makePostRequest는", () => {
  it("데이터를 가져오는데 성공하면 올바른 객체 형태로 반환한다", async done => {
    [1, 2, 3].map(async type => {
      const data = await getLibrary(type);
      expect(data.length).toBeGreaterThan(0);
      data.map(e => {
        expect(e).toHaveProperty("title");
        expect(e).toHaveProperty("remain");
        expect(e).toHaveProperty("use");
        expect(e).toHaveProperty("total");
      });
    });
    done();
  });
});

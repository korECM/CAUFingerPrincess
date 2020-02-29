import libraryAPI from "../../lib/parsing/library";

describe("library.js의 makePostRequest는", () => {
  it("데이터를 가져오는데 성공하면 올바른 객체 형태로 반환한다", async done => {
    const api = new libraryAPI();
    const data = await api.getLibrary();
    expect(data.seoul[0]).toHaveProperty('title');
    expect(data.seoul[0]).toHaveProperty('remain');
    expect(data.seoul[0]).toHaveProperty('use');
    expect(data.seoul[0]).toHaveProperty('total');
    done();
  });
});

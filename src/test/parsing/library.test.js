import getLibraryData from "../../lib/parsing/library";

describe("library.js의 getLibraryData는", () => {
  it("데이터를 가져오는데 성공하면 올바른 객체 형태로 반환한다", () => {
    const data = getLibraryData();
    expect(data).toBe("~~~~");
  });
});

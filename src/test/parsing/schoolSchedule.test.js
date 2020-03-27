import getSchoolSchedule from "../../lib/parsing/schoolSchedule";

describe("schoolSchedule.js는", () => {
  describe("get 메소드는", () => {
    it("성공적으로 데이터를 불러오면 올바른 객체를 반환한다", async done => {
      const data = await getSchoolSchedule(2020);
      data.map(e => {
        expect(e).toHaveProperty("title");
        expect(e).toHaveProperty("start");
        expect(e).toHaveProperty("end");
        expect(e.start).toHaveProperty("year");
        expect(e.start).toHaveProperty("month");
        expect(e.start).toHaveProperty("day");
        expect(e.end).toHaveProperty("year");
        expect(e.end).toHaveProperty("month");
        expect(e.end).toHaveProperty("day");
      });
      console.log(data);
      done();
    }, 10000);
  });
});

// SUBJECT : 이름
// START_Y 시작 년도
// START_M
// START_D
// END_Y
// END_M
// END_D

/*
{"SUBJECT":"신정(공휴일)","END_DY":"4","END_M":"01","START_Y":"2020","REPEAT_YN":"Y","END_D":"01","END_DAY":1514732400000,"START_D":"01","SCH_TYPE":"C1003","START_DAY":1514732400000,"END_Y":"2020","START_DY":"4","START_M":"01"}

{"SUBJECT":"학위수여식","END_DY":"6","END_M":"08","START_Y":"2020","REPEAT_YN":"N","END_D":"21","END_DAY":1597935600000,"START_D":"17","SCH_TYPE":"C1001","START_DAY":1597590000000,"END_Y":"2020","START_DY":"2","START_M":"08"}
*/

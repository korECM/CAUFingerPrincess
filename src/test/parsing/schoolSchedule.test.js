import schoolScheduleAPI from "../../lib/parsing/schoolSchedule";

describe("schoolSchedule.js는 ", () => {
  describe("getSchoolSchedule 메소드는", () => {
    it("성공적으로 데이터를 불러오면 올바른 객체를 반환한다", async done => {
      const api = new schoolScheduleAPI();
      const data = await api.getSchoolSchedule(2020);
      const expected = {
        title: "신정(공휴일)",
        start: {
          year: 2020,
          month: 1,
          day: 1
        },
        end: {
          year: 2020,
          month: 1,
          day: 1
        }
      };

      // console.log(data);
      expect(data.find(e => e.title === "신정(공휴일)")).toEqual(expected);
      done();
    }, 10000);

    it("성공적으로 데이터를 불러오지 못하면 에러를 발생시킨다", () => {
      const axiosMock = {};
      axiosMock.post = () => {
        return new Promise((resolve, reject) => {
          reject();
        });
      };
      const api = new schoolScheduleAPI(axiosMock);
      expect(() => api.getSchoolSchedule(2020).toThrow());
    });
  });
  describe("callAPI 메소드는 ", () => {
    it("성공적으로 데이터를 불러오지 못하면 에러를 발생시킨다", () => {
        const axiosMock = {};
        axiosMock.post = () => {
          return new Promise((resolve, reject) => {
            reject();
          });
        };
        const api = new schoolScheduleAPI(axiosMock);
        expect(() => api.getSchoolSchedule(2020).toThrow());
      });
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

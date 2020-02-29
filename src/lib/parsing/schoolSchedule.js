import axios from "axios";
import qs from "querystring";
class schoolScheduleAPI {
  constructor(module = axios) {
    this.axiosInterface = module;
  }
  async getSchoolSchedule(year) {
    try {
      const rawData = await this.callAPI(year);
      return this.parseData(rawData);
    } catch (error) {
      throw error;
    }
  }

  callAPI(year, siteNo = 2) {
    return new Promise((resolve, reject) => {
      this.axiosInterface
        .post(
          `https://www.cau.ac.kr/ajax/FR_SCH_SVC/ScheduleListData.do`,
          qs.stringify({
            SCH_YEAR: `${year}`,
            SCH_SITE_NO: `${siteNo}`
          })
        )
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          console.error("failed", error);
          throw error;
          reject(error);
        });
    });
  }

  parseData(data) {
    const result = data.map(e => {
      return {
        title: e.SUBJECT,
        start: {
          year: parseInt(e.START_Y),
          month: parseInt(e.START_M),
          day: parseInt(e.START_D)
        },
        end: {
          year: parseInt(e.END_Y),
          month: parseInt(e.END_M),
          day: parseInt(e.END_D)
        }
      };
    });
    return result;
  }
}

// SUBJECT : 이름
// START_Y 시작 년도
// START_M
// START_D
// END_Y
// END_M
// END_D

export default schoolScheduleAPI;

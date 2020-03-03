import axios from "axios";
import qs from "querystring";

async function getSchoolSchedule(year, siteNo = 2) {
  const rawData = await callAPI(year, siteNo);
  return parseData(rawData);
}

function callAPI(year, siteNo = 2) {
  return new Promise((resolve, reject) => {
    axios
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
        throw error;
      });
  });
}

function parseData(data) {
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

// SUBJECT : 이름
// START_Y 시작 년도
// START_M
// START_D
// END_Y
// END_M
// END_D

export default getSchoolSchedule;

import axios from "axios";
import axiosRetry from "axios-retry";
import qs from "querystring";
import api from "../api";

async function getSchoolSchedule(year, siteNo = 2) {
  try {
    const rawData = await callAPI(year, siteNo);
    return parseData(rawData);
  } catch (error) {
    throw new Error("API Error");
  }
}

function callAPI(year, siteNo = 2) {
  axiosRetry(axios, { retries: 3 });
  return new Promise((resolve, reject) => {
    axios
      .get(api + `/getSchoolSchedule/${year}`)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(error => {
        console.error(error);
        reject(error);
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

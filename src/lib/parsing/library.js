import axios from "axios";
import axiosRetry from "axios-retry";
import api from "../api";
async function getLibrary(tapNo) {
  try {
    const rawData = await callAPI(tapNo);
    return parseData(rawData);
  } catch (error) {
    return {
      error: {}
    };
  }
}

function parseData(data) {
  return data.map(e => {
    return {
      title: e.roomName,
      total: e.totalCnt,
      use: e.useCnt,
      remain: e.remainCnt
    };
  });
}

async function callAPI(tabNo) {
  axiosRetry(axios, { retries: 3 });
  try {
    let res = await axios.get(api + `/getLibrary/${tabNo}`);
    return JSON.parse(res.data).gridData;
  } catch (error) {
    throw error;
  }
}

export default getLibrary;

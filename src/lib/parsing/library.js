import axios from "axios";
import axiosRetry from "axios-retry";
import api from "../api";
async function getLibrary(tapNo) {
  try {
    const rawData = await callAPI(tapNo);
    console.log(rawData);
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
      title: e.rN,
      total: e.tC,
      use: e.uC,
      remain: e.rC
    };
  });
}

async function callAPI(tabNo) {
  axiosRetry(axios, { retries: 3 });
  try {
    let res = await axios.get(api + `/getLibrary/${tabNo}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export default getLibrary;

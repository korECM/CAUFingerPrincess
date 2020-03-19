import axios from "axios";
import axiosRetry from "axios-retry";
import api from "../api";
async function getBne() {
  const rawData = await callAPI();
  return parseData(rawData);
}

function parseData(data) {
  return data.map(e => {
    return {
      title: e.title,
      link: e.link,
      date: e.date
    };
  });
}

async function callAPI() {
  axiosRetry(axios, { retries: 3 });
  let res = await axios.get(api + "/readBneNotice");
  return res.data;
}

export default getBne;

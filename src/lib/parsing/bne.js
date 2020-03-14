import axios from "axios";
import axiosRetry from "axios-retry";
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
  let res = await axios.get(
    "https://wi8cwa01z1.execute-api.ap-northeast-2.amazonaws.com/dev/readBneNotice"
  );
  return res.data;
}

export default getBne;

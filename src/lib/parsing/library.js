const axios = require("axios");

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
  try {
    let res = await axios.get(
      `https://wi8cwa01z1.execute-api.ap-northeast-2.amazonaws.com/dev/getLibrary/${tabNo}`
    );
    return JSON.parse(res.data).gridData;
  } catch (error) {
    throw error;
  }
}

export default getLibrary;

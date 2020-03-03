const axios = require("axios");

async function getLibrary(tapNo) {
  const rawData = await callAPI(tapNo);
  return parseData(rawData);
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

async function callAPI(tapNo) {
  let res = await axios.post(
    "https://mportal.cau.ac.kr/portlet/p017/p017.ajax",
    {
      tabNo: tapNo
    }
  );
  return res.data.gridData;
}

export default getLibrary;

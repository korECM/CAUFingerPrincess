import axios from "axios";

const getSubwayInfo = async line => {
  let url = "";
  let result = [];
  if (line === 7) {
    url =
      "http://swopenapi.seoul.go.kr/api/subway/566e7a474e6a65663131387256736642/json/realtimeStationArrival/0/5/%EC%83%81%EB%8F%84(%EC%A4%91%EC%95%99%EB%8C%80%EC%95%9E)";
  } else if (line === 9) {
    url =
      "http://swopenapi.seoul.go.kr/api/subway/566e7a474e6a65663131387256736642/json/realtimeStationArrival/0/5/%ED%9D%91%EC%84%9D";
  } else {
    throw new Error(`지하철 호선 이상함 ${line}`);
  }
  try {
    let raw = await axios.get(url);
    result = raw.data.realtimeArrivalList.map(data => {
      return {
        name: data.trainLineNm,
        time: parseInt(data.barvlDt),
        message: data.arvlMsg2
      };
    });
    result.sort((a, b) => {
      return a.time > b.time;
    });
    return result;
  } catch (error) {
    return [];
  }
};

export default getSubwayInfo;

import axios from "axios";
import request from "request";
import cheerio from "cheerio";
import axiosRetry from "axios-retry";
import api from "./api";

const getFirstLast = line => {
  return new Promise((resolve, reject) => {
    if (line !== 7 && line !== 9) reject("Invalid Line");
    let url = api + `/getSubwayFirstLast/${line}`;
    request(url, (error, response, body) => {
      if (error) reject(error);
      if (!body || typeof body === "undefined") reject("No Body");
      console.log(body);
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        return {};
      }
    });
  });
};

const getSubwayInfo = async line => {
  let url = "";
  let result = { data: [[], []], noData: false };
  if (line === 7 || line === 9) {
    url = api + `/getSubway/${line}`;
  } else {
    throw new Error(`지하철 호선 이상함 ${line}`);
  }
  try {
    axiosRetry(axios, { retries: 3 });
    let raw = await axios.get(url);
    let obj = raw.data;
    console.log(obj.data);
    if (obj.status === 500 && obj.code === "INFO-200") {
      return {
        noData: true
      };
    } else if (obj.status === 500 && obj.code === "ERROR-337") {
      return {
        error: true
      };
    }
    result.data[0] = obj.realtimeArrivalList
      .filter(data => data.updnLine === "상행")
      .map(data => {
        let minute = parseInt(parseInt(data.barvlDt) / 60);
        let second = parseInt(data.barvlDt) - minute * 60;
        return {
          name: data.trainLineNm,
          time: parseInt(data.barvlDt),
          last: data.bstatnNm,
          message: `${minute}분 ${second}초`
        };
      });
    result.data[1] = obj.realtimeArrivalList
      .filter(data => data.updnLine === "하행")
      .map(data => {
        let minute = parseInt(parseInt(data.barvlDt) / 60);
        let second = parseInt(data.barvlDt) - minute * 60;
        return {
          name: data.trainLineNm,
          time: parseInt(data.barvlDt),
          last: data.bstatnNm,
          message: `${minute}분 ${second}초`
        };
      });
    // console.log(result);
    result.data.map(data =>
      data.sort((a, b) => {
        return a.time > b.time;
      })
    );
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export { getSubwayInfo };
export { getFirstLast };

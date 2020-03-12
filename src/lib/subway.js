import axios from "axios";
import request from "request";
import cheerio from "cheerio";
import axiosRetry from "axios-retry";

const getFirstLast = line => {
  return new Promise((resolve, reject) => {
    if (line !== 7 && line !== 9) reject("Invalid Line");
    let url = `https://wi8cwa01z1.execute-api.ap-northeast-2.amazonaws.com/dev/getSubwayFirstLast/${line}`;
    request(url, (error, response, body) => {
      if (error) reject(error);
      let $ = cheerio.load(JSON.parse(body));
      let totalResult = [];
      $(".time_table._fl_tab_content").each(function(index, element) {
        let results = [[], [], [], []];
        let flag = true;
        $(this)
          .find("tbody > tr")
          .each(function(index, element) {
            // 처음에 첫차 있으므로 true로 먼저 설정
            if (
              $(this)
                .find("th")
                .text().length > 0
            ) {
              flag = !flag;
            }
            let offset = 0;
            if (flag) {
              offset = 2;
            } else {
              offset = 0;
            }
            $(this)
              .find("td")
              .each(function(index, element) {
                if (index === 0) {
                  results[0 + offset].push(
                    $(this)
                      .find("div > div")
                      .text()
                      .trim()
                  );
                } else {
                  results[1 + offset].push(
                    $(this)
                      .find("div > div")
                      .text()
                      .trim()
                  );
                }
              });
          });
        // results = results.filter(data => data.length > 0);
        totalResult.push(results);
      });
      // console.log(totalResult);
      resolve(totalResult);
    });
  });
};

const getSubwayInfo = async line => {
  let url = "";
  let result = { data: [[], []], noData: false };
  if (line === 7 || line === 9) {
    url = `https://wi8cwa01z1.execute-api.ap-northeast-2.amazonaws.com/dev/getSubway/${line}`;
  } else {
    throw new Error(`지하철 호선 이상함 ${line}`);
  }
  try {
    axiosRetry(axios, { retries: 3 });
    let raw = await axios.get(url);
    // console.log(JSON.parse(raw.data));
    if (
      JSON.parse(raw.data).status === 500 &&
      JSON.parse(raw.data).code === "INFO-200"
    ) {
      return {
        noData: true
      };
    }
    result[0] = JSON.parse(raw.data)
      .realtimeArrivalList.filter(data => data.updnLine === "상행")
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
    result[1] = JSON.parse(raw.data)
      .realtimeArrivalList.filter(data => data.updnLine === "하행")
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
    result.sort((a, b) => {
      return a.time > b.time;
    });
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export { getSubwayInfo };
export { getFirstLast };

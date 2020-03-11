import axios from "axios";
import request from "request";
import cheerio from "cheerio";

const getFirstLast = line => {
  return new Promise((resolve, reject) => {
    if (line !== 7 && line !== 9) reject("Invalid Line");
    let url = "";
    if (line === 7)
      url =
        "https://m.search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EC%83%81%EB%8F%84%EC%97%AD";
    else
      url =
        "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%83%81%EB%8F%84%EC%97%AD&tqi=UEBXbdp0JxCssU%2B8n80ssssstVR-482726&query=%ED%9D%91%EC%84%9D%EC%97%AD";
    request(url, (error, response, body) => {
      if (error) reject(error);
      let $ = cheerio.load(body);
      let results = [[], [], [], []];
      // 처음에 첫차 있으므로 true로 먼저 설정
      let flag = true;
      $(
        "#ct > section.sc._sc_subway.mcs_subway > div.api_subject_bx > div.subway > div.time_detail_area > div.time_detail_inner._tab_content._first_last_info > table.time_table._fl_tab_content.on > tbody > tr"
      ).each(function(index, element) {
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
        }
        $(this)
          .find("td")
          .each(function(index, element) {
            if (index == 0) {
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
      results = results.filter(data => data.length > 0);
      // console.log(results);
      resolve(results);
    });
  });
};

getFirstLast(7);

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
        last: data.bstatnNm
      };
    });
    result = result.map(data => {
      let minute = parseInt(data.time / 60);
      let second = data.time - minute * 60;
      return {
        ...data,
        message: `${minute}분 ${second}초`
      };
    });
    result.sort((a, b) => {
      return a.time > b.time;
    });
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
};

module.exports.getSubwayInfo = getSubwayInfo;
module.exports.getFirstLast = getFirstLast;

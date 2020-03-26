import axios from "axios";
import axiosRetry from "axios-retry";
import api from "./api";

const getBusInfo = async id => {
  let url = "";
  let result = { data: [], noData: false };
  url = api + `/getBus/${id}`;
  try {
    axiosRetry(axios, { retries: 3 });
    let raw = await axios.get(url);
    let result = JSON.parse(raw.data);

    // console.log(result.ServiceResult);
    if (result.ServiceResult.msgHeader.headerCd._text === "4") {
      throw new Error("잘못된 정류장 번호");
    } else if (result.ServiceResult.msgHeader.headerCd._text !== "0") {
      return {
        ...result,
        noData: true
      };
    }
    let preArray = [result.ServiceResult.msgBody.itemList];
    // 버스가 하나 오는 경우 배열로 오지 않고 객체 단일로 오기 때문에 아래 형태로 배열로 변경해줌
    let finalResult = [].concat.apply([], preArray).map(data => {
      return {
        message: [data.arrmsg1._text, data.arrmsg2._text],
        name: data.rtNm._text
      };
    });
    return finalResult;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export { getBusInfo };

const axios = require("axios");

class libraryAPI {
  constructor(module = axios) {
    this.axiosInterface = module;
    this.libraryInfo = {};
    this.libraryName = ["", "seoul", "law", "anseong"];
  }

  async getLibrary() {
    this.parseData(await this.makePostRequest(1), 1);
    this.parseData(await this.makePostRequest(2), 2);
    this.parseData(await this.makePostRequest(3), 3);

    return this.libraryInfo;
  }

  async makePostRequest(type) {
    let res = await this.axiosInterface.post(
      "https://mportal.cau.ac.kr/portlet/p017/p017.ajax",
      {
        tabNo: type
      }
    );
    return res.data.gridData;
  }

  parseData(data, type) {
    this.libraryInfo[this.libraryName[type]] = data.map(e => {
      return {
        title: e.roomName,
        total: e.totalCnt,
        use: e.useCnt,
        remain: e.remainCnt
      };
    });
  }

  // console.log(`Status code: ${res.status}`);
  // console.log(`Status text: ${res.statusText}`);
  // console.log(`Request method: ${res.request.method}`);
  // console.log(`Path: ${res.request.path}`);
  // console.log(`Date: ${res.headers.date}`);
  // for (var i = 0; i < 13; i++) {
  //     this.libraryInfo.roomName[i] = res.data.gridData[i].roomName;
  //     this.libraryInfo.totalCnt[i] = res.data.gridData[i].totalCnt;
  //     this.libraryInfo.useCnt[i] = res.data.gridData[i].useCnt;
  //     this.libraryInfo.remainCnt[i] = res.data.gridData[i].remainCnt;
  //   console.log(
  //     `roomName: ${res.data.gridData[i].roomName} | 총 인원수: ${res.data.gridData[i].totalCnt} | 현사용 인원수: ${res.data.gridData[i].useCnt} | 여석: ${res.data.gridData[i].remainCnt}`
  //   );
  // }
}

export default libraryAPI;

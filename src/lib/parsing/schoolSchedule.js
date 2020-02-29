import axios from "axios";

class schoolScheduleAPI{
  constructor(module = axios){
    this.axiosInterface = module;
  }
  getSchoolSchedule(year) {
    const rawData = this.callAPI(year);
  }

  callAPI(year,  siteNo = 2) {
    let form = new FormData();
    form.append("SCH_YEAR", year);
    form.append("SCH_SITE_NO", siteNo);
  
    this.axiosInterface
      .post(`https://www.cau.ac.kr/ajax/FR_SCH_SVC/ScheduleListData.do`, form)
      .then(response => {
        console.log("response : ", JSON.stringify(response));
        return response;
      })
      .catch(error => {
        console.error("failed", error);
      });
  }
}


export default schoolScheduleAPI;

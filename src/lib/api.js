const axios = require('axios');

var libraryInfo = new Object();

async function makePostRequest() {
    let res = await axios.post('https://mportal.cau.ac.kr/portlet/p017/p017.ajax', {
        tabNo : 1
    });

    let res2 = await axios.post('https://mportal.cau.ac.kr/portlet/p017/p017.ajax', {
        tabNo : 2
    });

    let res3 = await axios.post('https://mportal.cau.ac.kr/portlet/p017/p017.ajax', {
        tabNo : 3
    });

    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);
    console.log(`Date: ${res.headers.date}`);
    for(var i = 0; i < 13; i++){
        libraryInfo.roomName[i] = res.data.gridData[i].roomName;
        libraryInfo.totalCnt[i] = res.data.gridData[i].totalCnt;
        libraryInfo.useCnt[i] = res.data.gridData[i].useCnt;
        libraryInfo.remainCnt[i] = res.data.gridData[i].remainCnt;
        console.log(`roomName: ${res2.data.gridData[i].roomName} | 총 인원수: ${res2.data.gridData[i].totalCnt} | 현사용 인원수: ${res2.data.gridData[i].useCnt} | 여석: ${res2.data.gridData[i].remainCnt}`);
    }
}

makePostRequest();
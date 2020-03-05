import axios from "axios";
import axiosRetry from "axios-retry";

async function getFood(tapNo) {
    const rawData = await callAPI(tapNo);
    // console.log(rawData);
    return parseData(rawData);
}

function callAPI(tapNo) {
    axiosRetry(axios, { retries: 3 });
    return new Promise((resolve, reject) => {
        axios
            .post(`https://mportal.cau.ac.kr/portlet/p005/p005.ajax`, {
                tabs: `${tapNo}`,
                tabs2: "40",
                daily: 0
            })
            .then(response => {
                resolve(response.data.list);
            })
            .catch(error => {
                throw error;
            });
    });
}

function parseData(data) {
    const result = data.map(e => {
        return {
            title: e.rest,
            type: e.course,
            time: e.time,
            price: e.price,
            menu: e.menuDetail
        };
    });
    const finalResult = {};
    result.map(data => {
        if (typeof finalResult[data
                .title] === "undefined") finalResult[data.title] = [];
        finalResult[data.title].push({
            type: data.type,
            time: data.time,
            price: data.price,
            menu: data.menu
        })
    })
    return finalResult;
}

// SUBJECT : 이름
// START_Y 시작 년도
// START_M
// START_D
// END_Y
// END_M
// END_D

export default getFood;
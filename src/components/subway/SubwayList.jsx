import React, { useEffect, useState } from "react";
// import getSubwayInfo from "../../lib/subway";
import "./SubwayList.scss";

const getSubwayInfo = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        name: "장승배기 역",
        time: "3분 50초 전",
        message: "전 역 출발"
      },
      {
        name: "상도 역",
        time: "0초",
        message: "도착"
      },
      {
        name: "노원 역",
        time: 900,
        message: "전 역 진입"
      }
    ]);
  });
};

export default function SubwayList({ line }) {
  let [data, setData] = useState([]);

  useEffect(() => {
    const getData = async line => {
      let result = await getSubwayInfo(line);
      setData(result.slice(0, 2));
    };
    getData(line);
    let id = setInterval(getData, 10000, line);
    return () => {
      clearInterval(id);
    };
  }, [line]);

  let lists = data.map(data => (
    <span className="subwayListMessage">
      <div>{data.message}</div>
      <div>{data.time}</div>
    </span>
  ));

  return (
    <div className="subwayList">
      <ul className="subwayListWrapper">
        <li className="subwayListElementWrapper">
          <span className="subwayDirection">장승배기 방향</span>
          <span>{lists}</span>
        </li>
        <li className="subwayListElementWrapper">
          <span className="subwayDirection">남성 방향</span>
          <span>{lists.slice(1)}</span>
        </li>
        <li className="subwayStartEnd">첫차 / 막차 정보</li>
        <li className="subwayStartEndContentParent">
          <span className="subwayStartEndDirection">장승배기 방향</span>
          <span className="subwayStartEndContentWrapper">
            <span className="subwayStartEndContent">
              <span>05:32</span>
              <span>00:31</span>
            </span>
            <span className="subwayStartEndContent">
              <span>05:32</span>
              <span>00:31</span>
            </span>
            <span className="subwayStartEndContent">
              <span>05:32</span>
              <span>00:31</span>
            </span>
          </span>
        </li>
        <li className="subwayStartEndContentParent">
          <span className="subwayStartEndDirection">남성 방향</span>
          <span className="subwayStartEndContentWrapper">
            <span className="subwayStartEndContent">
              <span>05:32</span>
              <span>00:31</span>
            </span>
            <span className="subwayStartEndContent">
              <span>05:32</span>
              <span>00:31</span>
            </span>
            <span className="subwayStartEndContent">
              <span>05:32</span>
              <span>00:31</span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}

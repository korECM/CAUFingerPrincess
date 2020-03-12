import React, { useEffect, useState, useCallback } from "react";
import "./SubwayList.scss";
import { getSubwayInfo } from "../../../lib/subway";

export default function SubwayList({ line }) {
  let [lists, setLists] = useState([[], []]);

  useEffect(() => {
    const getData = async line => {
      let result = await getSubwayInfo(line);
      console.log(result);
      // setData(result.slice(0, 2));
      apiToUI(result.slice(0, 2));
    };
    getData(line);
    let id = setInterval(getData, 100000000, line);
    return () => {
      clearInterval(id);
    };
  }, [line]);

  const apiToUI = useCallback(info => {
    if (info.length === 0) return;
    let results = [0, 1].map(index => {
      return info[index].map(data => {
        let date = new Date();
        date.setSeconds(date.getSeconds() + data.time);
        return (
          <li
            key={data.message + data.last + data.name}
            className="subwayDetail"
          >
            <div className="subwayTime">
              {date.getHours()} : {date.getMinutes()}
            </div>
            <div className="subwayLast">{data.last}</div>
            <div className="subwayTimeMessage">{data.message}</div>
          </li>
        );
      });
    });
    console.log(results);
    setLists(results);
  }, []);

  return (
    <div className="subwayListWrapper">
      <div className="subwayList">
        <div className="subwayInfo">
          <span>{line === 7 ? "장암행" : "중앙보훈병원행"}</span>
          <ul>{lists[0]}</ul>
        </div>
        <div className="vLine" />
        <div className="subwayInfo">
          <span>{line === 7 ? "부평구청행" : "개화행"}</span>
          <ul>{lists[1]}</ul>
        </div>
      </div>
    </div>
  );
}

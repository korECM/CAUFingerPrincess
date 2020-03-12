import React, { useEffect, useState, useCallback } from "react";
import "./SubwayList.scss";
import { getSubwayInfo } from "../../../lib/subway";

function SubwayList({ line }) {
  let [lists, setLists] = useState([[], []]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    let updateId = null;
    const getData = async line => {
      let result = await getSubwayInfo(line);
      console.log(result);
      console.log("메인 API 호출", line);
      clearInterval(updateId);
      updateId = dataUpdate(result);
    };
    getData(line);
    let id = setInterval(getData, 30000, line);
    return () => {
      clearInterval(id);
    };
  }, [line]);

  const dataUpdate = useCallback(raw => {
    let count = 0;
    const between = () => {
      apiToUI(raw, count);
      count = count + 1;
    };

    let id = setInterval(between, 1000);
    return id;
  }, []);

  const apiToUI = useCallback((info, count) => {
    if (info.length === 0) return;
    console.log("초 업데이트");
    console.log(count + 1);
    let results = [0, 1].map(index => {
      return info[index]
        .filter(data => data.last !== "0" && data.time !== 0)
        .map(data => {
          let date = new Date();
          date.setSeconds(date.getSeconds() + data.time);
          let secondRaw = data.time >= count ? data.time - count : 0;

          let minute = parseInt(secondRaw / 60);
          let second = secondRaw - minute * 60;
          setLoading(false);
          return (
            <li
              key={data.message + data.last + data.name}
              className="subwayDetail"
            >
              <div className="subwayTime">
                {date.getHours()} :{" "}
                {date.getMinutes() > 10
                  ? date.getMinutes()
                  : `0${date.getMinutes()}`}
              </div>
              <div className="subwayLast">{data.last}</div>
              <div className="subwayTimeMessage">{`${minute}분 ${second}초`}</div>
            </li>
          );
        });
    });
    // console.log(results);
    setLists(results);
  }, []);

  return (
    <div className="subwayListWrapper">
      {loading && (
        <div
          className={`ui active centered inline loader ${
            line === 7 ? "seven" : "nine"
          }`}
        ></div>
      )}
      {!loading && (
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
      )}
    </div>
  );
}

export default React.memo(SubwayList);

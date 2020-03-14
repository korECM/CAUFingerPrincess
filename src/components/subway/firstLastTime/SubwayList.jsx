import React, { useCallback, useState, useEffect, useRef } from "react";
import { getFirstLast } from "../../../lib/subway";
import "./SubwayList.scss";

function SubwayList({ line, type }) {
  let apiData = useRef([]);

  useEffect(() => {
    const getData = async line => {
      let result = await getFirstLast(line);
      apiData.current = result;
      parseData(type);
    };
    getData(line);
  }, [line]);

  useEffect(() => {
    parseData(type);
  }, [type]);

  const parseData = useCallback(
    type => {
      if (apiData.current.length === 0) return;
      let result = apiData.current[type.findIndex(value => value)];
      while (result[0].length !== result[1].length) {
        if (result[0].length > result[1].length) {
          // console.log(1);
          result[1].push("");
        } else {
          // console.log(0);
          result[0].push("");
        }
      }
      while (result[2].length !== result[3].length) {
        if (result[2].length > result[3].length) {
          result[3].push("");
          // console.log(3);
        } else {
          result[2].push("");
          // console.log(2);
        }
      }
      let tempList = result.map(data => {
        return data.map((e, index) => {
          let split = e.split(" ");
          return (
            <li
              className="subwayFirstLastTimeListItem"
              key={`${type + index}${split[0]}${split[1]}`}
            >
              <span className="subwayFirstLastTimeListItemTime">
                {split[0]}
              </span>
              <span className="subwayFirstLastTimeListItemName">
                {split[1]}
              </span>
            </li>
          );
        });
      });
      // console.log(tempList);
      setList(tempList);
    },
    [apiData]
  );

  let [list, setList] = useState([]);

  return (
    <div className="subwayFirstLastListWrapper">
      <div className="subwayFirstLastDivided">
        <div className="subwayFirstLastTitle main">
          {line === 7 ? "장암행" : "중앙보훈병원행"}
        </div>
        <div className="subwayFirstLastTitle" style={{ fontWeight: 100 }}>
          첫차
        </div>
        <ul className="subwayFirstLastTimeList">{list[0]}</ul>
        <div className="subwayFirstLastTitle" style={{ fontWeight: 100 }}>
          막차
        </div>
        <ul className="subwayFirstLastTimeList">{list[2]}</ul>
      </div>
      <div className="subwayFirstLastDivided">
        <div className="subwayFirstLastTitle main">
          {line === 7 ? "부평구청행" : "개화행"}
        </div>
        <div className="subwayFirstLastTitle" style={{ fontWeight: 100 }}>
          첫차
        </div>
        <ul className="subwayFirstLastTimeList">{list[1]}</ul>
        <div className="subwayFirstLastTitle" style={{ fontWeight: 100 }}>
          막차
        </div>
        <ul className="subwayFirstLastTimeList">{list[3]}</ul>
      </div>
    </div>
  );
}

export default SubwayList;

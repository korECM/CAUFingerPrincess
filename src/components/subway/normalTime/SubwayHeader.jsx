import React from "react";
import "./SubwayHeader.scss";

export default function SubwayHeader({line}) {
  const info = {
    7 : {
      prev : "숭실대 입구",
      current : "상도",
      next : "장승배기"
    },
    9 : {
      prev : "동작",
      current : "흑석",
      next : "노들"
    }
  }
  return (
    <div className="subwayHeaderWrapper">
      <div className={`subwayHeader ${line === 7 ? "seven" : "nine"}`}>
        <div>〈 {info[line].prev}</div>
        <div>
          <div></div>
          <span >{info[line].current}</span>
        </div>
        <div>{info[line].next} 〉</div>
      </div>
    </div>
  );
}

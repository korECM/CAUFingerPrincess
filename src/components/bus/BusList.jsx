import React, { useEffect, useCallback, useState } from "react";
import "./BusList.scss";

const BusList = ({ stationData }) => {
  let { prevName, curName, nextName } = stationData;

  let dummyData = [
    {
      busName: "5511",
      time: "1분 30초",
    },
    {
      busName: "동작01",
      time: "곧 도착",
    },
  ];

  return (
    <div className="busCardListWrapper">
      <div className="stationNameWrapper">
        <span className="stationName">{prevName}</span>
        <span className="stationName">{curName}</span>
        <span className="stationName">{nextName}</span>
      </div>
      <table className="busCardTable">
        <tr className="busListWrapper">
          <td>
            {dummyData.map((data) => {
              return (
                <div className="busList">
                  <span className="busName">{data.busName}</span>
                  <span className="busTime">{data.time}</span>
                </div>
              );
            })}
          </td>
          <td>
            {dummyData.map((data) => {
              return (
                <div className="busList">
                  <span className="busName">{data.busName}</span>
                  <span className="busTime">{data.time}</span>
                </div>
              );
            })}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BusList;

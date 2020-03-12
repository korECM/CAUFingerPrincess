import React from "react";
import "./SubwayAround.scss";

export default function SubwayAround({ line }) {
  const data = [
    [
      <span> 이수 </span>,
      <span> 남성 </span>,
      <span>
        숭실대
        <br />
        입구
      </span>,
      <span> 상도 </span>,
      <span>
        장승
        <br /> 배기
      </span>,
      <span>
        신대방
        <br /> 삼거리
      </span>,
      <span> 보라매 </span>
    ],
    [
      <span>신반포</span>,
      <span>구반포</span>,
      <span>동작</span>,
      <span>흑석</span>,
      <span>노들</span>,
      <span>노량진</span>,
      <span>샛강</span>
    ]
  ];
  let map = [1, 1, 1, 1, 1, 1, 1].map((_, index) => {
    return (
      <li className="station" key={`${line}${index}`}>
        <span className={`line ${line === 7 ? "seven" : "nine"}`}></span>{" "}
        <i className={`circle ${line === 7 ? "seven" : "nine"}`}></i>
        {data[parseInt(line / 3) - 2][index]}
      </li>
    );
  });
  return (
    <div>
      <ul className="subway">{map}</ul>
    </div>
  );
}

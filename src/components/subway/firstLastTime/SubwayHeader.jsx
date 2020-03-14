import React from "react";
import "./SubwayHeader.scss";

function SubwayHeader({ line, type, onChange }) {
  return (
    <div className="subwayFirstLastHeader">
      <span>{line === 7 ? "상도" : "흑석"}역 첫차 / 막차</span>
      <div className="segmented-control">
        <input
          type="radio"
          id={`sc-1-${line}-1`}
          checked={type[0]}
          onChange={() => onChange(0)}
        />
        <label htmlFor={`sc-1-${line}-1`} data-value="평일">
          <span>평일</span>
        </label>
        <input
          type="radio"
          id={`sc-1-${line}-2`}
          checked={type[1]}
          onChange={() => onChange(1)}
        />
        <label htmlFor={`sc-1-${line}-2`} data-value="토요일">
          <span>토요일</span>
        </label>
        <input
          type="radio"
          id={`sc-1-${line}-3`}
          checked={type[2]}
          onChange={() => onChange(2)}
        />
        <label htmlFor={`sc-1-${line}-3`} data-value="휴일">
          <span>휴일</span>
        </label>
      </div>
    </div>
  );
}

export default SubwayHeader;

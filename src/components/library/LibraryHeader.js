import React from "react";
import "./LibraryHeaderSegmentButtons.scss";

const LibraryHeader = ({ type, onChange }) => {
  return (
    <div className="libraryWrap">
      <span
        style={{
          flex: "none",
          fontSize: "13px",
          fontWeight: "lighter",
          marginTop: "8px",
          marginLeft: "5px",
          borderRadius: "0.5rem 0.5rem 0 0"
        }}
      >
        도서관 자리
      </span>
      <div className="segmented-control">
        <input
          type="radio"
          name="sc-1-3"
          id="sc-1-3-1"
          checked={type[0]}
          onChange={() => onChange(0)}
        />
        <label htmlFor="sc-1-3-1" data-value="서울">
          <span>서울</span>
        </label>
        <input
          type="radio"
          name="sc-1-3"
          id="sc-1-3-2"
          checked={type[1]}
          onChange={() => onChange(1)}
        />
        <label htmlFor="sc-1-3-2" data-value="안성">
          <span>안성</span>
        </label>
        <input
          type="radio"
          name="sc-1-3"
          id="sc-1-3-3"
          checked={type[2]}
          onChange={() => onChange(2)}
        />
        <label htmlFor="sc-1-3-3" data-value="법학">
          <span>법학</span>
        </label>
      </div>
    </div>
  );
};
// <div style={{ marginLeft: "auto" }}>
// <libraryButtons>서울</libraryButtons>
// <libraryButtons>안성</libraryButtons>
// <libraryButtons>법학</libraryButtons>
// </div>

export default LibraryHeader;

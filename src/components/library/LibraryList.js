import React from "react";
import "./ListItem.scss";
import LibraryProgressBar from "./LibraryProgressBar";

const LibraryList = ({ lists, loading, error }) => {

  let list = [];

  if (!error) {
    list = lists.map(data => {
      let percent = parseInt((data.use / data.total) * 100);
      return (
        <li className="libraryListItem" key={data.title}>
          <span>{data.title}</span>
          <LibraryProgressBar percent={percent} />
        </li>
      );
    });
  }

  let overflow = loading ? "hidden" : "auto";

  return (
    <ul
      style={{
        backgroundColor: "white",
        borderRadius: "0 0 0.5rem 0.5rem",
        maxHeight: "190px",
        overflow: overflow
      }}
    >
      {error && <li>에러 ㅎ</li>}
      {!error && loading ? <li>로딩중 ㅎ</li> : list}
    </ul>
  );
};

export default React.memo(LibraryList);

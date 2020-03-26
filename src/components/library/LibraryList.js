import React, { Fragment } from "react";
import "./ListItem.scss";
import LibraryProgressBar from "./LibraryProgressBar";
import ErrorAnimation from "../../useful/error/error";

const LibraryList = ({ lists, loading, error }) => {
  let list = [];

  if (!error) {
    list = lists.map(data => {
      let percent = parseInt((data.use / data.total) * 100);
      return (
        <li className="libraryListItem" key={data.title}>
          <div>
            <span>{data.title}</span>
            <span>
              {data.use} / {data.total}
            </span>
          </div>
          <LibraryProgressBar percent={percent} />
        </li>
      );
    });
  }
  let overflow = loading ? "hidden" : "auto";

  return (
    <ul
      className="libraryListContainer fadeIn"
      style={{
        overflow: overflow
      }}
    >
      {error && (
        <li>
          <ErrorAnimation />
        </li>
      )}
      {!error && loading ? (
        <Fragment>
          <li>
            <div
              className="ui fluid placeholder"
              style={{ margin: "15px", marginTop: "0px" }}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line very short"></div>
            </div>
          </li>
          <li>
            <div
              className="ui fluid placeholder"
              style={{ margin: "15px", marginTop: "0px" }}
            >
              <div className="line long"></div>
              <div className="line short"></div>
            </div>
          </li>
        </Fragment>
      ) : (
        list
      )}
    </ul>
  );
};

export default React.memo(LibraryList);

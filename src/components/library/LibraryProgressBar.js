import React from "react";

const LibraryProgressBar = ({ percent }) => {
  const calColor = () => {
    if (percent < 40) {
      return "green";
    }
    if (percent < 80) {
      return "yellow";
    }
    return "red";
  };

  let color = calColor();
  return (
    <div
      className={`ui ${color} small progress indicating active`}
      style={{
        marginLeft: "10px",
        marginRight: "10px",
        top: "4%",
        backgroundColor: "#E8E8E8",
        height: "0.25em"
      }}
    >
      <div
        className="bar"
        style={{ width: `${percent}%`, height: "0.25em", minWidth: "1.5px" }}
      ></div>
    </div>
  );
};

/*
        <div className="progress" style={{ fontSize: "10px" }}>
          {percent}%
        </div>
*/

export default LibraryProgressBar;

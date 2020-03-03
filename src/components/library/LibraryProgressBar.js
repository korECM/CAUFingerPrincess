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
      className={`ui ${color} small progress`}
      style={{ width: "100%", margin: "auto 10px", backgroundColor: "#E8E8E8" }}
    >
      <div className="bar" style={{ width: `${percent}%` }}>
        <div className="progress" style={{ fontSize: "10px" }}>
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default LibraryProgressBar;

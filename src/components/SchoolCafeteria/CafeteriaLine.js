import React from "react";
import "./CafeteriaHeader.scss";

export default function CafeteriaHeaderLine() {
  var lineStyle = {
    display: "flex",
    flex: 1,
    height: 3,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 0,
    backgroundColor: "gray"
  };

  return <div style={lineStyle}></div>;
}

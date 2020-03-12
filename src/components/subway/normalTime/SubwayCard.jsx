import React from "react";
import SubwayHeader from "./SubwayHeader";
import SubwayList from "./SubwayList";
import SubwayAround from "./SubwayAround";
import "./SubwayCard.scss";

export default function SubwayCard({ line }) {
  return (
    <div className="subwayCard">
      <SubwayHeader line={line} />
      <SubwayAround line={line} />
      <SubwayList line={line} />
    </div>
  );
}

// <SubwayList line={line} />

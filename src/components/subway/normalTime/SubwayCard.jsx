import React from "react";
import SubwayHeader from "./SubwayHeader";
import SubwayList from "./SubwayList";
import SubwayAround from "./SubwayAround";
import "../../DefaultCard.scss";

function SubwayCard({ line }) {
  return (
    <div className="card">
      <SubwayHeader line={line} />
      <SubwayAround line={line} />
      <SubwayList line={line} />
    </div>
  );
}

export default React.memo(SubwayCard);
// <SubwayList line={line} />

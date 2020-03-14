import React, { useState, useCallback } from "react";
import "./SubwayFirstLastCard.scss";
import SubwayHeader from "./SubwayHeader";
import SubwayList from "./SubwayList";

function SubwayFirstLastCard({ line }) {
  let [type, setType] = useState([true, false, false]);

  const onChange = useCallback(
    id => {
      setType(type.map((data, index) => (index !== id ? false : true)));
    },
    [type]
  );

  return (
    <div className="subwayCard">
      <SubwayHeader line={line} onChange={onChange} type={type} />
      <SubwayList line={line} type={type} />
    </div>
  );
}

export default SubwayFirstLastCard;

import React, { useState } from "react";
import "../DefaultCard.scss";
import BusHeader from "./BusHeader";
import BusList from "./BusList";
import BusIconList from "./BusIconList";

function BusCard() {
  const [stationData, setStationData] = useState({
    prevName: "흑석역",
    curName: "중대 정문",
    nextName: "중대 후문",
  });

  return (
    <div className="card">
      <BusHeader />
      <BusIconList setStationData={setStationData} />
      <BusList stationData={stationData} />
    </div>
  );
}

export default BusCard;

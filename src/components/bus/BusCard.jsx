import React from "react";
import "../DefaultCard.scss";
import BusHeader from "./BusHeader";
import BusList from "./BusList"

function BusCard() {
  return (
    <div className="card">
      <BusHeader />
      <BusList />
    </div>
  );
}

export default BusCard;

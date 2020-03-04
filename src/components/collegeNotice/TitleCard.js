import React, { Component } from "react";
import TagButton from "../../components/TagButton.js";

class TitleCard extends React.Component {
  render() {
    var cardStyle = {
      height: 70,
      width: 300,
      backgroundColor: "#FF6663",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      boxShadow: "0 2px 4px rgba(0,0,0,.15)",
      fontSize: 20,
      color: "#FFFFFF",
      padding: 25
    };

    return <div style={cardStyle}>#경영경제대학</div>;
  }
}

export default TitleCard;

import React, { Component } from "react";
import TagButton from "../../components/TagButton.js";

class TitleCard extends React.Component {
  render() {
    var cardStyle = {
      height: "35px",
      lineHeight: "35px",
      width: "100%",
      backgroundColor: "#FF6663",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      fontSize: "13px",
      color: "#FFFFFF",
      paddingLeft: 10,
      fontFamily: "Noto Sans KR"
    };

    return <div style={cardStyle}>#경영경제대학</div>;
  }
}

export default TitleCard;

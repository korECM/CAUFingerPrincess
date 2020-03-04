import React, { Component } from "react";
import TagButton from "../../components/TagButton.js";
import ListCard from "./ListCard.js";
import TitleCard from "./TitleCard.js";

class NoticeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collages: [
        "인문대학",
        "사회과학대학",
        "사범대학",
        "자연과학대학",
        "생명공학대학",
        "공과대학",
        "창의ICT공과대학",
        "소프트웨어대학",
        "경영경제대학",
        "의과대학",
        "약학대학",
        "적십자간호대학",
        "예술대학",
        "예술공학대학",
        "체육대학"
      ]
    };
  }

  render() {
    var cardStyle = {
      height: 250,
      width: 300,
      backgroundColor: "white",
      boxShadow: "0 2px 4px rgba(0,0,0,.15)",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    };

    return (
      <div style={cardStyle}>
        <TitleCard />
        <ListCard />
      </div>
    );
  }
}

//console.log(TagButton.state.collage);

export default NoticeCard;

import React, { Component } from "react";

class ListCard extends React.Component {
  render() {
    var cardStyle = {
      height: 200,
      width: 300,
      top: 0,
      backgroundColor: "white"
    };

    return <div style={cardStyle}></div>;
  }
}

class NoticeCard extends React.Component {
  render() {
    var cardStyle = {
      height: 250,
      width: 300,
      backgroundColor: "white",
      //   shadowColor: "#000",
      //   shadowOffset: {
      //     width: 0,
      //     height: 2
      //   },
      //   shadowOpacity: 0.25,
      //   shadowRadius: 3.84,
      //   elevation: 5,
      boxShadow: "0 2px 4px rgba(0,0,0,.15)",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    };

    return (
      <div style={cardStyle}>
        <ListCard />
      </div>
    );
  }
}

export default NoticeCard;

import React, { Component } from "react";
// import { Dimensions } from "react-native";

// var width = Dimensions.get("window").width;
// var height = Dimensions.get("window").height;

class MainLine extends React.Component {
  render() {
    var lineStyle = {
      height: 3,
      width: "100%",
      padding: 0,
      backgroundColor: "gray"
    };

    return <div style={lineStyle}></div>;
  }
}

export default MainLine;

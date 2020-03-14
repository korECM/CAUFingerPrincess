import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NoticeCard from "./CollageNotice.js";
import getBne from "../../lib/parsing/bne.js";
import ListCard from "./ListCard.js";
import TitleCard from "./TitleCard.js";
import DateListCard from "./DateListCard.js";

class Linking extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/home"
            render={() => {
              return <h1>Welcome Home</h1>;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default Linking;

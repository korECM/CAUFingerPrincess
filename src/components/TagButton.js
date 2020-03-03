import React, { Component } from "react";
import "./TagButton.css";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },

//   TagTextStyle: {
//     fontSize: 18,
//     marginTop: 17
//   }
// });

class TagButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      colleges: [
        "#인문대학",
        "#사회과학대학",
        "#자연과학대학",
        "#생명공학대학",
        "#공과대학",
        "#창의ICT공과대학",
        "#소프트웨어대학",
        "#경영경제대학",
        "#의과대학",
        "#약학대학",
        "#적십자간호대학",
        "#예술대학",
        "#예술공학대학",
        "#체육대학",
        "#사범대학"
      ]
    };
  }

  changeColor(i) {
    this.setState({
      bool: this.state.bool.map((item, index) => (index !== i ? item : !item))
    });
  }

  render() {
    const { colleges } = this.state;
    const collegeList = colleges.map((collage, i) => (
      <button
        className={this.state.bool[i] ? "skyblue" : "roundButton"}
        key={collage}
      >
        <div onClick={e => this.changeColor(i)} style={TagTextStyle}>
          {collage}
        </div>
      </button>
    ));

    var container = {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    };

    var TagTextStyle = {
      fontSize: 30,
      marginRight: 50,
      marginLeft: 50,
      marginTop: 20
    };

    return <div style={TagTextStyle}>{collegeList}</div>;
  }
}

export default TagButton;

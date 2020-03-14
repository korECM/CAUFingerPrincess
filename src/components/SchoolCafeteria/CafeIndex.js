import React, { Component } from "react";
import "./CafeIndex.scss";

// const indexele = () => {
//     return (
//         <div className = "cafeIndex">
//             <span>참슬기 식당</span>
//         </div>
//     );
// }

class CafeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: [false, false, false, false, false, false, false, false],
      cafelists: [
        "University Club",
        "학생식당",
        "교직원식당",
        "생활관식당(308)",
        "생활관식당(309)",
        "참슬기 식당",
        "안성학생식당",
        "안성교직원식당"
      ]
    };
    this.changeColor.bind(this);
    // 클래스 형 함수는 위에 추가해줘야함!
  }

  changeColor(i) {
    console.log(i);
    this.setState({
      bool: this.state.bool.map((item, index) => (index !== i ? false : true))
    });
  }

  render() {
    const { cafelists } = this.state;
    const cafeList = cafelists.map((cafe, i) => (
      <button
        className={`cafeIndex yHover ${this.state.bool[i] ? "gray" : ""}`}
        key={cafe}
        onClick={e => this.changeColor(i)}
        style={{ height: 35, flex: 1 }}
      >
        <div style={TagTextStyle}>{cafe}</div>
      </button>
    ));

    // 왜 버튼이 잘 안눌리나 했더니 누르는 함수가 글자 영역만 해당 되어서 그러는겨
    // 그래서 div에서 버튼으로 onCLick 옮겼음

    var container = {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    };

    var TagTextStyle = {
      fontSize: 30,
      flex: 1
    };

    return <div style={TagTextStyle}>{cafeList}</div>;
  }
}

export default CafeIndex;

// export default function CafeIndex() {
//   return (
//     <div className="cafeIndex">
//       <indexele />
//       <indexele />
//       <indexele />
//       <indexele />
//     </div>
//   );
// }

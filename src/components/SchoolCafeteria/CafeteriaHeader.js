import React from "react";
import "./CafeteriaHeader.scss";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white"
//   },
//   case1: {
//     flex: 1,
//     backgroundColor: "red"
//   },
//   case2: {
//     flex: 1,
//     backgroundColor: "green"
//   }
// });

export default function CafeteriaHeader() {
  return (
    <div className="cafeteriaHeader">
      <span>메뉴판</span>
      <a>참슬기 식당</a>
    </div>
  );
}

import React, { useEffect, useCallback, useState } from "react";
import "./BusList.scss";

const BusList = () => {
  return (
    <div className="busCardListWrapper">
      <table className="busCardTable">
        <thead><tr><th></th><th>흑석 -> 학교</th><th>상도 -> 학교</th></tr></thead>
        <tbody>
          <tr>
            <td className="busTableTitle">흑석역</td>
          </tr>
          <tr>
            <td className="busTableTitle">중앙대 정문</td>
          </tr>
          <tr>
            <td className="busTableTitle">중앙대 중문</td>
          </tr>
          <tr>
            <td className="busTableTitle">중앙대 후문</td>
          </tr>
          <tr>
            <td className="busTableTitle">상도역</td>
          </tr>
          <tr>
            <td className="busTableTitle">노량진</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BusList;

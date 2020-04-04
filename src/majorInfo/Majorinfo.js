import React, { Fragment, useState, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./majorInfoCard.scss";

function MajorInfo() {
  return (
    <div className="boardCard">
      <div className="majorInfoCard">
        <div className="content">
          <div className="majorNameCard">소프트웨어학부</div>
          <div className="titleCard">
            <span>졸업요건</span>
            <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
              소프트웨어학부 졸업요건
            </a>
          </div>
          <div className="titleCard">
            <span>이수체계도</span>
            <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
              소프트웨어학부 이수체계도
            </a>
          </div>
          <div className="titleCard">
            <span>학사 연락처</span>
            <a href="https://cse.cau.ac.kr/main.php">310관 7층 | 02-820-5301</a>
          </div>
        </div>
      </div>

      <div className="majorInfoCard">
        <div className="content">
          <div className="majorNameCard">전자전기공학부</div>
          <div className="titleCard">
            <span>졸업요건</span>
            <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
              전자전기공학부 졸업요건
            </a>
          </div>
          <div className="titleCard">
            <span>이수체계도</span>
            <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
              전자전기공학부 이수체계도
            </a>
          </div>
          <div className="titleCard">
            <span>학사 연락처</span>
            <a href="http://e3home.cau.ac.kr/20141201/main/main.php">
              310관 615호 | 02-820-5295/5333
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MajorInfo;

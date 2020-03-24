import React, { Fragment, useState, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./snsCard.scss";

function seoulAll() {
  return (
    <div className="boardCard">

    
      <div className="snsCard">
        <div className="content2">
          <div className="square"></div>
        </div>
        <div className="content">
          <div className="titleCard">
            <a href="https://www.facebook.com/profile.php?id=639655309476757&ref=br_rs">
              중앙대학교 서울캠퍼스 총학생회
            </a>
          </div>
          <div className="categoryCard">
            <span>페이스북 페이지</span>
          </div>
        </div>
      </div>

      <div className="snsCard">
        <div className="content2">
          <div className="square"></div>
        </div>
        <div className="content">
          <div className="titleCard">
            <a href="https://www.facebook.com/profile.php?id=134467473428711&ref=br_rs">
              중앙대학교 입학 홍보대사 CAUnselor
            </a>
          </div>
          <div className="categoryCard">
            <span>페이스북 페이지</span>
          </div>
        </div>
      </div>


    </div>
  );
}

export default seoulAll;

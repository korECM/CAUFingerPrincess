import React, { Fragment, useState, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import seoulAll from "./seoulAll";
import "./snsCard.scss";

function SNS() {
  return (
    <div className="boardCard">
      <div className="snsCard">
        <div className="content2">
          <div className="square" style={{ backgroundColor: "black" }}></div>
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
          <div className="square" style={{ backgroundColor: "skyblue" }}></div>
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

      <div className="snsCard">
        <div className="content2">
          <div className="square" style={{ backgroundColor: "#325599" }}></div>
        </div>
        <div className="content">
          <div className="titleCard">
            <a href="https://www.facebook.com/profile.php?id=191027664285538&ref=br_rs">
              중앙대학교(Chung Ang University, CAU)
            </a>
          </div>
          <div className="categoryCard">
            <span>페이스북 페이지</span>
          </div>
        </div>
      </div>

      <div className="snsCard">
        <div className="content2">
          <div className="square" style={{ backgroundColor: "#559955" }}></div>
        </div>
        <div className="content">
          <div className="titleCard">
            <a href="https://www.facebook.com/caubamboo/?ref=br_rs">
              중앙대학교 대나무숲
            </a>
          </div>
          <div className="categoryCard">
            <span>페이스북 페이지</span>
          </div>
        </div>
      </div>

      <div className="snsCard">
        <div className="content2">
          <div className="square" style={{ backgroundColor: "#fd8273" }}></div>
        </div>
        <div className="content">
          <div className="titleCard">
            <a href="https://www.facebook.com/CauClub/?ref=br_rs">
              중앙대학교 서울캠퍼스 동아리연합회
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

export default SNS;

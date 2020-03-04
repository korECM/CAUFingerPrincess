import React, { Fragment } from "react";
import GlobalStyles from "./components/GlobalStyles";
import "./App.css";

import LibraryCard from "./components/library/libraryCard";
import "./components/TagButton.css";
import TagButton from "./components/TagButton";
import MainLine from "./components/MainLine";
import NoticeCard from "./components/CollageNotice";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <div id="container">
        <header className="mainHeader">
          <img
            src="http://icons.iconarchive.com/icons/iconsmind/outline/512/One-Finger-icon.png"
            width="34"
            height="34"
            alt="손가락 로고"
          />
          <span
            style={{
              font: "Noto Sans KR",
              fontSize: 30,
              fontWeight: "bold"
            }}
          >
            <span style={{ color: "#7FC9F1" }}>모아</span>보기
          </span>
        </header>
        <div className="layout">
          <nav className="navStyle">
            <ul className="navMenuWrap">
              <li className="navSection yHover">학교 정보</li>
              <li className="navSubMenu yHover">학식</li>
              <li className="navSubMenu yHover">학사 일정</li>
              <li className="navSubMenu yHover">졸업 요건</li>
            </ul>
            <ul className="navMenuWrap">
              <li className="navSection yHover">기타</li>
              <li className="navSubMenu yHover">맛집 리스트</li>
              <li className="navSubMenu yHover">강의 평</li>
              <li className="navSubMenu yHover">셔틀 버스 노선</li>
            </ul>
            <ul className="navMenuWrap">
              <li className="navSection yHover">개발자 정보</li>
              <li className="navSubMenu yHover">자기소개서</li>
              <li className="navSubMenu yHover">포트폴리오</li>
              <li className="navSubMenu yHover">성적 조회</li>
            </ul>
          </nav>
          <main className="mainStyle">
            <header className="contentHeader">
              <div className="icon">
                <img
                  src="https://freeiconshop.com/wp-content/uploads/edd/notification-outline.png"
                  width="34"
                  height="34"
                  alt="알림 버튼"
                />
              </div>

              <h1 className="mainTitle">CAU Finger Collection</h1>
            </header>

            <MainLine />
            <div className="content">
              <div style={{ display: "flex", flex: 1 }}>
                <TagButton />
              </div>
              <div className="gridContent">
                <LibraryCard />
                <NoticeCard />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

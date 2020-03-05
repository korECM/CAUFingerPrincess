import React, { Fragment, useState, useCallback } from "react";
import GlobalStyles from "./components/GlobalStyles";
import "./App.css";

import LibraryCard from "./components/library/libraryCard";
import "./components/TagButton.css";
import TagButton from "./components/TagButton";
import NoticeCard from "./components/collegeNotice/CollageNotice";
import NavigationBar from "./components/NavigationBar";
import ContentHeader from "./components/ContentHeader";
import DateListCard from "./components/collegeNotice/DateListCard";

function App() {
  let [showSideBar, setShowSideBar] = useState(false);

  let onClickHamburgerButton = useCallback(() => {
    console.log(showSideBar);
    setShowSideBar(!showSideBar);
  }, [showSideBar]);

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
          <span>
            <span style={{ color: "#7FC9F1" }}>모아</span>보기
          </span>
        </header>
        <div className="layout">
          <main className="mainStyle">
            <ContentHeader show={showSideBar} onClickHamburgerButton={onClickHamburgerButton} />
            <div className="content">
              <TagButton />
            </div>
            <div className="gridContent">
              <LibraryCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
            </div>
          </main>
          <NavigationBar show={showSideBar} onBackgroundClick={onClickHamburgerButton}/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

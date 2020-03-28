import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Link } from "react-router-dom";
import ContentHeader from "./components/ContentHeader";

function MainLayout(props) {
  const { showSideBar, onClickHamburgerButton } = props;
  return (
    <div id="container">
      <header className="mainHeader">
        <Link to="/">
          <img
            src="http://icons.iconarchive.com/icons/iconsmind/outline/512/One-Finger-icon.png"
            width="34"
            height="34"
            alt="손가락 로고"
          />
          <span>
            <span style={{ color: "#7FC9F1" }}>모아</span>보기
          </span>
        </Link>
      </header>
      <ContentHeader
        show={showSideBar}
        onClickHamburgerButton={onClickHamburgerButton}
      />
      <div className="layout">
        <main className="mainStyle">{props.children}</main>
        <NavigationBar
          show={showSideBar}
          onBackgroundClick={onClickHamburgerButton}
        />
      </div>
    </div>
  );
}

export default MainLayout;

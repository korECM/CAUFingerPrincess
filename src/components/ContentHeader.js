import React from "react";
import MainLine from "./MainLine";

export default function ContentHeader({ show, onClickHamburgerButton }) {
  return (
    <header className="contentHeader">
      <div className="icon">
        <img
          src="https://freeiconshop.com/wp-content/uploads/edd/notification-outline.png"
          width="34"
          height="34"
          alt="알림 버튼"
        />
        <button onClick={onClickHamburgerButton}>
          <div id="hamburger" className={show ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <h1 className="mainTitle">CAU Finger Collection</h1>
      <MainLine />
    </header>
  );
}

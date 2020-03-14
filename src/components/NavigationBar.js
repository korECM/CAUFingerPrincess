import React from "react";

export default function NavigationBar({show, onBackgroundClick}) {
  return (
    <nav className={`navStyle ${show ? "showNav": "hide"}`} onClick={onBackgroundClick}>
      <ul className={`navMenuWrap ${show ? "showNavMenuWrap" : "hideNavMenuWrap"}`}>
        <li className="navSection yHover">학교 정보</li>
        <li className="navSubMenu yHover">학식</li>
        <li className="navSubMenu yHover">학사 일정</li>
        <li className="navSubMenu yHover">졸업 요건</li>
      </ul>
      <ul className={`navMenuWrap ${show ? "showNavMenuWrap" : "hideNavMenuWrap"}`}>
        <li className="navSection yHover">기타</li>
        <li className="navSubMenu yHover">맛집 리스트</li>
        <li className="navSubMenu yHover">강의 평</li>
        <li className="navSubMenu yHover">셔틀 버스 노선</li>
      </ul>
      <ul className={`navMenuWrap ${show ? "showNavMenuWrap" : "hideNavMenuWrap"}`}>
        <li className="navSection yHover">개발자 정보</li>
        <li className="navSubMenu yHover">자기소개서</li>
        <li className="navSubMenu yHover">포트폴리오</li>
        <li className="navSubMenu yHover">성적 조회</li>
      </ul>
    </nav>
  );
}

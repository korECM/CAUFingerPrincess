import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar({ show, onBackgroundClick }) {
  return (
    <nav
      className={`navStyle ${show ? "showNav" : "hide"}`}
      onClick={onBackgroundClick}
    >
      <ul
        className={`navMenuWrap ${
          show ? "showNavMenuWrap" : "hideNavMenuWrap"
        }`}
      >
        <li className="navSection yHover">학교 정보</li>
        <li className="navSubMenu yHover">학식</li>
        <li className="navSubMenu yHover">
          <Link to="/schedule">학사 일정</Link>
        </li>
        <li className="navSubMenu yHover">졸업 요건</li>
      </ul>
      <ul
        className={`navMenuWrap ${
          show ? "showNavMenuWrap" : "hideNavMenuWrap"
        }`}
      >
        <li className="navSection yHover">학교 주변 정보</li>
        <li className="navSubMenu yHover">
          <Link to="/inDoor">교내 시설 일단 이거만 추가</Link>
        </li>
        <li className="navSubMenu yHover">강의 평</li>
        <li className="navSubMenu yHover">셔틀 버스 노선</li>
      </ul>
      <ul
        className={`navMenuWrap ${
          show ? "showNavMenuWrap" : "hideNavMenuWrap"
        }`}
      >
        <li className="navSection yHover">개발자 정보</li>
        <li className="navSubMenu yHover">자기소개서</li>
        <li className="navSubMenu yHover">포트폴리오</li>
        <li className="navSubMenu yHover">성적 조회</li>
      </ul>
      <ul
        className={`navMenuWrap ${
          show ? "showNavMenuWrap" : "hideNavMenuWrap"
        }`}
      >
        <li className="navSection yHover">교내 기타 정보</li>
        <li className="navSubMenu yHover">교환학생 정보</li>
        <li className="navSubMenu yHover">졸업 요건 및 이수 체계도</li>
        <li className="navSubMenu yHover">학교 연락망</li>
        <li className="navSubMenu yHover">
          <Link to="/SNS">교내 SNS 모음</Link>
        </li>
        <li className="navSubMenu yHover">
          <Link to="/majorInfo">학과별 졸업/세부 정보</Link>
        </li>
      </ul>
    </nav>
  );
}

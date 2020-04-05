import React, { Fragment, useState, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./majorInfoCard.scss";

// 경영경제대학 : 경영학부, 경제학부, 광고홍보학과, 국제물류학과, 산업보안학과, 응용통계학과, 지식경영학부

// 공과대학 : 건축학부, 기계공학부, 사회기반시스템공학부, 에너지시스템공학부, 화학신소재공학부

// 사범대학 : 교육학과, 영어교육과, 유아교육과, 체육교육과

// 사회과학대학 : 공공인재학부, 도시계획·부동산학과, 문헌정보학과, 미디어커뮤니케이션학부, 사회복지학부, 사회학과, 심리학과, 정치국제학과

// 생명공학대학 : 생명자원공학부, 시스템생명공학과, 식품공학부

// 소프트웨어대학 : 소프트웨어학부

// 약학대학 : 약학부

// 예술공학대학 : 컴퓨터예술학부

// 예술대학 : 공연영상창작학부, 글로벌예술학부, 디자인학부, 미술학부, 음악학부, 전통예술학부

// 의과대학 : 의학부

// 인문대학 : 국어국문학과, 아시아문화학부, 역사학과, 영어영문학과, 유럽문화학부, 철학과

// 자연과학대학 : 물리학과, 생명과학과, 수학과, 화학과

// 적십자간호대학 : 간호학과

// 창의ICT공과대학 : 융합공학부, 융합교양학부, 전자전기공학부

// 체육대학 : 스포츠과학부

function MajorInfo() {
  return (
    <div className="boardCard">
      <div className="boardCard">
        <div className="collageNameCard">경영경제대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">경영학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="http://biz.cau.ac.kr/2016/sub04/sub04_03.php#">
                경영학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="http://biz.cau.ac.kr/2016/sub02/sub02_01.php#">
                경영학 전공 이수체계도
              </a>
              <a href="http://biz.cau.ac.kr/2016/sub03/sub03_0202.php#">
                글로벌금융전공 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="http://biz.cau.ac.kr/">310관401호 | 02-820-5539/5540</a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">경제학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="http://econ.cau.ac.kr/department/administration/">
                경제학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="http://econ.cau.ac.kr/department/class/">
                경제학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="http://econ.cau.ac.kr/">
                310관 424호 | 02-820-5487/6646
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">광고홍보학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                광고홍보학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                광고홍보학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">국제물류학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                국제물류학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                국제물류학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">산업보안학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                산업보안학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                산업보안학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">응용통계학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                응용통계학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                응용통계학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">지식경영학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                지식경영학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                지식경영학부 이수체계도
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
      <div className="boardCard">
        <div className="collageNameCard">공과대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">건축학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                건축학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                건축학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">기계공학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                기계공학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                기계공학부 이수체계도
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
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">사회기반시스템공학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                사회기반시스템공학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                사회기반시스템공학부 이수체계도
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
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">에너지시스템공학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                에너지시스템공학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                에너지시스템공학부 이수체계도
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
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">화학신소재공학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                화학신소재공학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                화학신소재공학부 이수체계도
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
      <div className="boardCard">
        <div className="collageNameCard">사범대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">교육학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                교육학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                교육학과 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">영어교육과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                영어교육과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                영어교육과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">유아교육과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                유아교육과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                유아교육과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">체육교육과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                체육교육과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                체육교육과 이수체계도
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
      <div className="boardCard">
        <div className="collageNameCard">사회과학대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">공공인재학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                공공인재학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                공공인재학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">도시계획·부동산학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                도시계획·부동산학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                도시계획·부동산학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">문헌정보학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                문헌정보학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                문헌정보학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">미디어커뮤니케이션학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                미디어커뮤니케이션학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                미디어커뮤니케이션학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">사회복지학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                사회복지학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                사회복지학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">사회학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                사회학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                사회학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">심리학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                심리학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                심리학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">정치국제학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                정치국제학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                정치국제학과 이수체계도
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
      <div className="boardCard">
        <div className="collageNameCard">생명공학대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">생명자원공학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                생명자원공학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                생명자원공학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">시스템생명공학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                시스템생명공학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                시스템생명공학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">식품공학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                식품공학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                식품공학부 이수체계도
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
      <div className="boardCard">
        <div className="collageNameCard">소프트웨어대학</div>
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
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="boardCard">
        <div className="collageNameCard">약학대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">약학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                약학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                약학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="boardCard">
        <div className="collageNameCard">예술공학대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">컴퓨터예술학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                컴퓨터예술학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                컴퓨터예술학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="boardCard">
        <div className="collageNameCard">예술대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">공연영상창작학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                공연영상창작학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                공연영상창작학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">글로벌예술학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                글로벌예술학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                글로벌예술학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">디자인학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                디자인학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                디자인학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">미술학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                미술학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                미술학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">음악학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                음악학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                음악학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">전통예술학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                전통예술학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                전통예술학부 이수체계도
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

      <div className="boardCard">
        <div className="collageNameCard">의과대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">의학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                의학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                의학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="boardCard">
        <div className="collageNameCard">인문대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">국어국문학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                국어국문학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                국어국문학과 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">아시아문화학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                아시아문화학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                아시아문화학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">역사학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                역사학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                역사학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">영어영문학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                영어영문학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                영어영문학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">유럽문화학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                유럽문화학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                유럽문화학부 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">철학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                철학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                철학과 이수체계도
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

      <div className="boardCard">
        <div className="collageNameCard">자연과학대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">물리학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                물리학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                물리학과 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">생명과학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                생명과학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                생명과학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">수학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                수학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                수학과 이수체계도
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

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">화학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab03.jsp">
                화학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://abeek.cau.ac.kr/program/program0205_tab02.jsp">
                화학과 이수체계도
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

      <div className="boardCard">
        <div className="collageNameCard">적십자간호대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">간호학과</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                간호학과 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                간호학과 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="boardCard">
        <div className="collageNameCard">창의ICT공과대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">융합공학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                융합공학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                융합공학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>

        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">융합교양학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                융합교양학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                융합교양학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
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
      <div className="boardCard">
        <div className="collageNameCard">체육대학</div>
        <div className="majorInfoCard">
          <div className="content">
            <div className="majorNameCard">스포츠과학부</div>
            <div className="titleCard">
              <span>졸업요건</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_3.php">
                스포츠과학부 졸업요건
              </a>
            </div>
            <div className="titleCard">
              <span>이수체계도</span>
              <a href="https://cse.cau.ac.kr/sub02/sub0204_2.php">
                스포츠과학부 이수체계도
              </a>
            </div>
            <div className="titleCard">
              <span>학사 연락처</span>
              <a href="https://cse.cau.ac.kr/main.php">
                310관 7층 | 02-820-5301
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MajorInfo;

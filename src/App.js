import React, { Fragment } from "react";
import GlobalStyles from "./components/GlobalStyles";
import "./App.css";
import ChineseDragonSVG from "./svg/chinese-dragon-1738876-1477556";

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
        <header style={{ position: "fixed", left: 24, top: 30, zIndex: 1000 }}>
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
              <li className="navSection">학교 정보</li>
              <li className="navSubMenu">학식</li>
              <li className="navSubMenu">학사 일정</li>
              <li className="navSubMenu">졸업 요건</li>
            </ul>
            <ul className="navMenuWrap">
              <li className="navSection">기타</li>
              <li className="navSubMenu">맛집 리스트</li>
              <li className="navSubMenu">강의 평</li>
              <li className="navSubMenu">셔틀 버스 노선</li>
            </ul>
            <ul className="navMenuWrap">
              <li className="navSection">개발자 정보</li>
              <li className="navSubMenu">자기소개서</li>
              <li className="navSubMenu">포트폴리오</li>
              <li className="navSubMenu">성적 조회</li>
            </ul>
          </nav>
          <main className="mainStyle">
            <header
              style={{ position: "relative", width: "100%", height: 235 }}
            >
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
              <ChineseDragonSVG style={{}} />
              <div>
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

// let string = `Reprehenderit voluptate minim officia enim dolore excepteur sunt.
// Magna velit officia dolore sint sit ad aute. Cillum eiusmod ad
// pariatur sit. Sint fugiat aliquip culpa duis cillum et ex amet
// reprehenderit velit voluptate id laboris. Nulla aliquip dolore
// adipisicing do irure ea fugiat veniam labore et fugiat. Laboris
// aliqua ipsum anim nostrud minim aute exercitation ex est. Eiusmod
// dolore id excepteur velit. Occaecat adipisicing Lorem ex sit
// pariatur do aliquip aliqua non adipisicing consequat sint. Labore
// nisi proident ex laboris cupidatat veniam eu anim elit pariatur.
// Voluptate sint cupidatat quis minim id commodo ex quis minim. Sit ad
// quis et consequat et enim elit. Adipisicing consectetur irure culpa
// eiusmod nostrud magna magna eiusmod ea sint incididunt nisi.
// Occaecat reprehenderit sint ad commodo in exercitation do dolor et
// velit cupidatat et. Quis eu ex laborum ut incididunt nisi anim ex
// incididunt. Sunt elit anim reprehenderit sit tempor amet dolor ut
// in. Aute aute nisi adipisicing enim occaecat ullamco ipsum ea. Minim
// reprehenderit esse enim ea consequat incididunt est duis dolore
// commodo minim eu. Elit ea anim cupidatat reprehenderit exercitation.
// Sint aliqua aliqua occaecat adipisicing labore dolor reprehenderit
// irure magna. Elit qui duis Lorem ipsum cillum in esse excepteur
// deserunt. Nulla non Lorem dolor enim aliqua minim in. Quis
// exercitation dolore velit cupidatat dolor anim eu deserunt excepteur
// aliquip mollit magna aute amet. Ad incididunt tempor nisi deserunt
// dolor velit. Ullamco magna laboris do mollit officia dolore sunt ut.
// Anim est eu dolor ex non. Qui officia culpa laboris minim non duis
// consequat culpa minim voluptate proident. Incididunt ipsum proident
// irure dolor nostrud laborum nostrud magna et ex cupidatat. Irure
// ipsum aliqua sint anim veniam officia deserunt. Tempor magna mollit
// tempor proident nostrud sit dolore ea. Incididunt anim laborum
// dolore qui tempor excepteur magna amet aliquip et veniam irure
// dolore. Tempor aute nisi quis occaecat reprehenderit sint excepteur.
// Voluptate excepteur incididunt laboris ullamco cillum excepteur
// consectetur quis qui. Nulla sint enim magna laboris adipisicing
// consequat ut mollit nostrud voluptate aliqua. Commodo occaecat eu
// Lorem et culpa labore consequat reprehenderit Lorem deserunt laborum
// et deserunt. Proident occaecat consequat labore irure cupidatat
// officia ea consectetur dolore ea nulla eu id officia. Non dolor
// occaecat velit consectetur eu est reprehenderit incididunt officia
// consectetur ad velit nulla consequat. Aute fugiat amet in ipsum.
// Incididunt consectetur et et consectetur esse nisi aliquip cupidatat
// cillum magna. Velit in officia irure anim et. Voluptate do proident
// culpa tempor tempor labore excepteur occaecat irure minim nulla
// mollit enim. Ex anim nisi aute exercitation in. Id do anim laborum
// enim Lorem reprehenderit. Sit sunt veniam voluptate culpa aliqua
// culpa veniam. Amet commodo ea culpa consectetur adipisicing dolore
// velit proident ad proident veniam eiusmod non. Veniam elit
// incididunt eiusmod ad excepteur fugiat sunt Lorem. Aliquip excepteur
// magna aliqua duis irure deserunt excepteur. Consectetur veniam culpa
// veniam nostrud. Amet amet ea pariatur voluptate esse. Irure velit
// adipisicing irure voluptate. Ex nulla laboris dolor voluptate
// exercitation consectetur dolor exercitation adipisicing aliqua ad
// esse. Nulla cillum cillum laborum laboris velit officia consequat
// et. Consequat laborum pariatur veniam esse aliquip elit. Est ullamco
// in ut eu occaecat consequat ut ea. Fugiat fugiat est dolore in
// eiusmod sit deserunt dolore ut ipsum consectetur dolore mollit
// incididunt. Enim dolor dolor sint pariatur laboris irure adipisicing
// enim deserunt anim velit mollit anim pariatur. Sit esse ad proident
// elit incididunt. Ullamco et veniam minim eu proident. Pariatur
// adipisicing ex voluptate esse sit ea magna enim enim qui magna. Duis
// aliqua culpa et ex excepteur veniam consequat consectetur elit
// pariatur amet. Eiusmod est consectetur dolore aliqua excepteur
// cupidatat excepteur tempor amet ipsum cupidatat pariatur minim.
// Ipsum qui in amet nostrud occaecat incididunt et ea elit amet
// pariatur consectetur nisi aliqua. Anim pariatur ipsum ex cillum
// proident proident mollit ullamco sit culpa eu. Laborum laborum sit
// ut exercitation reprehenderit elit irure pariatur voluptate enim
// magna. Nulla irure velit ipsum sint exercitation dolor aliqua
// consectetur. Tempor qui esse labore sint excepteur non adipisicing
// sit irure sint. Ad Lorem aliqua deserunt voluptate proident ut sint.
// Nostrud nulla esse deserunt cupidatat laboris elit esse deserunt
// incididunt do excepteur reprehenderit. Adipisicing nostrud commodo
// amet ut anim sit irure proident aliqua non reprehenderit quis in
// laboris. Sunt Lorem non pariatur deserunt amet id anim duis magna
// minim quis aliquip qui. Id excepteur reprehenderit velit do officia
// labore incididunt id incididunt. In cupidatat est minim mollit
// excepteur enim aute. Nulla ex cupidatat est ad eu cupidatat ullamco
// exercitation aute. Dolor duis adipisicing et deserunt sunt laboris
// anim culpa. Ullamco nulla laborum excepteur adipisicing dolore.
// Voluptate ut enim pariatur et dolore proident sit laborum quis. Anim
// sint labore tempor nulla officia est veniam occaecat laborum
// excepteur ea. Exercitation mollit occaecat quis aliquip sunt velit
// consequat do. Enim veniam elit esse culpa mollit cillum veniam elit
// cupidatat officia aute. Est minim commodo esse ipsum est dolor
// fugiat id quis consectetur qui nulla consectetur. Quis nulla
// occaecat irure deserunt aliqua veniam ullamco enim qui. Do irure
// amet anim culpa duis. Ea consectetur magna mollit reprehenderit
// voluptate magna nulla nostrud dolor. Qui esse cupidatat enim anim
// est enim in proident deserunt amet deserunt aliqua. Ut tempor qui
// tempor esse laborum deserunt cupidatat. Dolore cillum do elit Lorem
// proident officia eiusmod eu duis minim pariatur aliquip deserunt.
// Reprehenderit ullamco incididunt laboris proident velit occaecat
// elit Lorem laboris non ullamco esse. Aliqua deserunt nulla tempor
// reprehenderit incididunt ea dolore voluptate laboris in et. Qui
// mollit consectetur ex fugiat sit elit. Eu elit nulla exercitation
// aute labore enim nulla. Duis velit esse nulla sint qui. Velit
// ullamco do excepteur amet dolor laboris sunt et. Sit in minim
// cupidatat laboris eu laborum ex aliqua velit ut sint culpa. Labore
// proident reprehenderit exercitation sint occaecat nulla. Id do
// adipisicing tempor veniam dolore non do pariatur aute nostrud
// consequat. Non nisi ad qui eu est labore laboris incididunt id anim
// reprehenderit elit consequat nostrud. Irure amet excepteur fugiat
// duis amet qui amet consequat magna reprehenderit nulla cupidatat. Ut
// pariatur ipsum ad consequat. Deserunt labore amet ipsum voluptate
// labore eu veniam non id proident. Nostrud et adipisicing ullamco
// incididunt deserunt qui. Eu magna exercitation exercitation eiusmod
// Lorem Lorem anim dolor dolore dolor id ullamco veniam nulla. Velit
// do commodo deserunt commodo veniam incididunt laborum ex. Nostrud
// labore cillum sit fugiat amet adipisicing do. Lorem minim aliquip ut
// anim consectetur. Cillum deserunt consectetur esse commodo amet
// reprehenderit cillum irure proident amet sunt nisi. Consectetur
// labore ex labore ipsum quis occaecat proident duis elit et laborum
// aute id. Labore cillum ipsum culpa laboris. Commodo ullamco sunt
// duis ipsum occaecat sint ut voluptate nulla dolore labore.
// Consectetur occaecat dolor eiusmod consectetur incididunt eiusmod do
// nostrud aute ipsum. Pariatur aliqua laborum anim ea ea elit laboris
// proident in nostrud non. Ex qui culpa tempor nulla ipsum. Lorem qui
// do nostrud aliquip velit. Sunt dolore occaecat amet ex magna.
// Officia voluptate ad nulla reprehenderit dolor ad dolor labore
// proident et cupidatat adipisicing tempor. Dolor aliquip fugiat
// veniam aliquip irure dolor enim enim ullamco Lorem cillum ea
// reprehenderit. Officia nostrud veniam ullamco sint. Duis laborum
// voluptate sint ullamco adipisicing sit magna in quis tempor in nisi
// cupidatat consequat. Enim mollit est veniam cupidatat mollit officia
// enim ad occaecat proident Lorem cupidatat reprehenderit. Sunt
// occaecat nostrud sint cillum ut consequat occaecat mollit eu dolore.
// Officia et laboris minim Lorem mollit non cupidatat. Lorem
// consectetur id magna deserunt nostrud pariatur magna ad incididunt
// sunt elit quis ea. Ea anim culpa laboris excepteur. Enim cupidatat
// qui ullamco commodo ad excepteur anim dolor eu. Amet consectetur id
// proident sit laboris ex laborum commodo quis. Cupidatat sint id
// tempor sint sint veniam magna sint proident cillum tempor ipsum
// consequat proident. Enim quis consequat labore est commodo dolor
// ullamco laborum dolore fugiat voluptate excepteur et. Sunt aliquip
// ea ut minim. Cupidatat sunt velit et aliqua et ex tempor duis
// officia. Minim exercitation dolore pariatur est voluptate ipsum
// aliquip culpa mollit sint proident. Laborum eu labore amet
// reprehenderit. Ea occaecat exercitation dolor anim fugiat irure
// nulla velit minim aliquip sint dolor. Cupidatat voluptate tempor
// magna et commodo sunt ad culpa adipisicing et do ex dolor. Anim est
// exercitation incididunt ipsum ea proident tempor Lorem anim aute
// eiusmod qui. Elit non elit aliqua occaecat velit enim velit
// consequat adipisicing Lorem qui aliqua. Deserunt sit in ad aute
// adipisicing fugiat exercitation nulla. Sit Lorem voluptate et in
// cupidatat aute. Labore fugiat nostrud ullamco amet nostrud excepteur
// veniam ea in occaecat laboris laboris. Enim sint fugiat tempor esse
// non id eu dolor eiusmod eiusmod deserunt nisi. Id eiusmod ut irure
// qui. Aliqua officia do nisi dolore dolor mollit magna consequat
// cupidatat non reprehenderit sit. Aliquip aliquip irure et non tempor
// labore. Cillum proident elit cillum cillum aliqua culpa. Aute sunt
// sint pariatur eu ad. Excepteur est occaecat id quis adipisicing
// proident voluptate ut ipsum mollit. Nulla occaecat ut deserunt ex
// laborum in. Qui non aliquip voluptate sunt ad et amet qui. Dolor id
// cillum in nisi veniam minim cupidatat cupidatat elit culpa veniam
// irure ea Lorem. Laboris id dolore dolore do quis nisi veniam.
// Aliquip dolore reprehenderit tempor mollit Lorem sint cupidatat sint
// duis irure nisi. Deserunt amet laborum incididunt labore incididunt
// ullamco commodo sunt est fugiat voluptate esse in.`;

export default App;

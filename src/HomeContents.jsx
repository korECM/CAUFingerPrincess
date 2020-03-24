import React, { Fragment } from "react";

import LibraryCard from "./components/library/libraryCard";
import TagButton from "./components/TagButton";
import NoticeCard from "./components/collegeNotice/CollageNotice";

import ContentHeader from "./components/ContentHeader";

import ChineseDragonSVG from "./svg/chinese-dragon-1738876-1477556";
import SubwayCard from "./components/subway/normalTime/SubwayCard";
import SubwayFirstLastCard from "./components/subway/firstLastTime/SubwayFirstLastCard";

import SchoolCafeteria from "./components/SchoolCafeteria/SchoolCafeteria";
import CafeIndex from "./components/SchoolCafeteria/CafeIndex";

import SNS from "../src/sns/SNS";
// import BusCard from "./components/bus/BusCard";

function HomeContents(props) {
  const { showSideBar, onClickHamburgerButton } = props;
  return (
    <Fragment>
      <ContentHeader
        show={showSideBar}
        onClickHamburgerButton={onClickHamburgerButton}
      />
      <div className="content">
        <TagButton />
      </div>
      <ChineseDragonSVG />
      <div className="gridContent">
        <LibraryCard />
        <NoticeCard />
        <SubwayCard line={7} />
        <SubwayCard line={9} />
        <SubwayFirstLastCard line={7} />
        <SubwayFirstLastCard line={9} />
        <div className="forCafeIndex">
          <CafeIndex />
          <SchoolCafeteria />
        </div>
        <SNS />
      </div>
    </Fragment>
  );
}

export default HomeContents;

//<BusCard />

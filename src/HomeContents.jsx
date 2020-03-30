import React, { Fragment, Suspense } from "react";

// import LibraryCard from "./components/library/libraryCard";
import TagButton from "./components/TagButton";
// import NoticeCard from "./components/collegeNotice/CollageNotice";

import ChineseDragonSVG from "./svg/chinese-dragon-1738876-1477556";
// import SubwayCard from "./components/subway/normalTime/SubwayCard";
// import SubwayFirstLastCard from "./components/subway/firstLastTime/SubwayFirstLastCard";

import SchoolCafeteria from "./components/SchoolCafeteria/SchoolCafeteria";
import CafeIndex from "./components/SchoolCafeteria/CafeIndex";

import LoadingAnimation from "./useful/loading/loading";

const SubwayCard = React.lazy(() =>
  import("./components/subway/normalTime/SubwayCard")
);

const LibraryCard = React.lazy(() =>
  import("./components/library/libraryCard")
);

const SubwayFirstLastCard = React.lazy(() =>
  import("./components/subway/firstLastTime/SubwayFirstLastCard")
);

const NoticeCard = React.lazy(() =>
  import("./components/collegeNotice/CollageNotice")
);

function HomeContents(props) {
  return (
    <Fragment>
      <div className="content">
        <TagButton />
      </div>
      <ChineseDragonSVG />
      <div className="gridContent">
        <Suspense fallback={<LoadingAnimation width="200" height="200" />}>
          <LibraryCard />
        </Suspense>
        <Suspense fallback={<LoadingAnimation width="200" height="200" />}>
          <NoticeCard />
        </Suspense>
        <Suspense fallback={<LoadingAnimation width="200" height="200" />}>
          <SubwayCard line={7} />
        </Suspense>
        <Suspense fallback={<LoadingAnimation width="200" height="200" />}>
          <SubwayCard line={9} />
        </Suspense>
        <Suspense fallback={<LoadingAnimation width="200" height="200" />}>
          <SubwayFirstLastCard line={7} />
        </Suspense>
        <Suspense fallback={<LoadingAnimation width="200" height="200" />}>
          <SubwayFirstLastCard line={9} />
        </Suspense>
        <div className="forCafeIndex">
          <CafeIndex />
          <SchoolCafeteria />
        </div>
      </div>
    </Fragment>
  );
}

export default HomeContents;

//<BusCard />

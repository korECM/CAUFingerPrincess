import React, { Fragment, useState, useCallback, lazy, Suspense } from "react";
import GlobalStyles from "./components/GlobalStyles";
import MainLayout from "./MainLayout";
import "./App.css";
// import SNS from "./sns/SNS";
import "./star_rate/starindex.css";

import HomeContents from "./HomeContents";
// import Calendar from "./components/calendar/Calendar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingAnimation from "./useful/loading/loading";

const Calendar = lazy(() => import("./components/calendar/Calendar"));
const SNS = lazy(() => import("./sns/SNS"));

function App() {
  let [showSideBar, setShowSideBar] = useState(false);

  let onClickHamburgerButton = useCallback(() => {
    setShowSideBar(!showSideBar);
  }, [showSideBar]);

  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <MainLayout
          showSideBar={showSideBar}
          onClickHamburgerButton={onClickHamburgerButton}
        >
          <Route
            exact
            path="/"
            component={() => (
              <HomeContents
                showSideBar={showSideBar}
                onClickHamburgerButton={onClickHamburgerButton}
              />
            )}
          />
          <Suspense fallback={<LoadingAnimation />}>
            <Route path="/SNS" component={() => <SNS />} />
            <Route path="/inDoor" component={() => <div>Indoor</div>} />
            <Route path="/schedule" component={Calendar} />
          </Suspense>
        </MainLayout>
      </Router>
    </Fragment>
  );
}

export default App;

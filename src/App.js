import React, { Fragment, useState, useCallback } from "react";
import GlobalStyles from "./components/GlobalStyles";
import MainLayout from "./MainLayout";
import "./App.css";

import "./star_rate/starindex.css";

import HomeContents from "./HomeContents";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Route path="/inDoor" component={() => <div>Indoor</div>} />
        </MainLayout>
      </Router>
    </Fragment>
  );
}

export default App;

/*


*/

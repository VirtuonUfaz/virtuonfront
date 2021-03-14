import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";
// import "semantic-ui-css/semantic.min.css";

const Home = lazy(() => import("./Home"));
const Rooms = lazy(() => import("./Rooms"));
const Grades = lazy(() => import("./Grades"));
const TimeTable = lazy(() => import("./TimeTable"));
// const RoomsInside = lazy(() => import("./RoomsInside"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Rooms" component={Rooms} />
              <Route exact path="/Grades" component={Grades} />
              <Route exact path="/rooms" component={Rooms} />
              {/* <Route exact path="/roomsInside" component={RoomsInside} /> */}
              <Route exact path="/time-table" component={TimeTable} />
            </Switch>
          </Layout>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

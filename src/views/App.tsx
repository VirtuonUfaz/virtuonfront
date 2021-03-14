import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";

const Home = lazy(() => import("./Home"));
const TimeTable = lazy(() => import("./TimeTable"));
const Rooms = lazy(() => import("./Rooms"));
const RoomsInside = lazy(() => import("./Rooms/RoomsInside/RoomsInside"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/time-table" component={TimeTable} />
            </Switch>
            <Switch>
              <Route exact path="/Rooms" component={Rooms} />
              <Route exact path="/RoomsInside" component={RoomsInside} />
            </Switch>
          </Layout>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

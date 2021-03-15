import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";

const Home = lazy(() => import("./Home"));
const Rooms = lazy(() => import("./Rooms"));
const Grades = lazy(() => import("./Grades"));
const TimeTable = lazy(() => import("./TimeTable"));
const Login = lazy(() => import("./Login"));
const CreateEvent = lazy(() => import("./Event/CreateEvent"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route>
              <Switch>
                <Layout>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/event/create" component={CreateEvent} />
                  <Route exact path="/Grades" component={Grades} />
                  <Route exact path="/rooms" component={Rooms} />
                  <Route exact path="/time-table" component={TimeTable} />
                </Layout>
              </Switch>
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

import React, { lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "components/Layout";
import { VirtuonContext } from "../helpers/context/context";
import Loading from "components/Loading";

const Home = lazy(() => import("./Home"));
const Tasks = lazy(() => import("./Tasks"));
const Rooms = lazy(() => import("./Rooms"));
const Grades = lazy(() => import("./Grades"));
const TimeTable = lazy(() => import("./TimeTable"));
const Archive = lazy(() => import("./Archive"));
const RoomsInside = lazy(() => import("./RoomsInside"));
const Login = lazy(() => import("./Login"));
const CreateEvent = lazy(() => import("./Event/CreateEvent"));

const RootRedirect = () => {
  return <Redirect to={`/home`} />;
};

const LoginRedirect = () => {
  return <Redirect to={`/login`} />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<Loading />}>
          <VirtuonContext.Consumer>
            {({ user }) => {
              if (user) {
                return (
                  <>
                    <Route>
                      <Switch>
                        <Layout>
                          <Route exact path="/" component={RootRedirect} />
                          <Route exact path="/Home" component={Home} />
                          <Route
                            exact
                            path="/event/create"
                            component={CreateEvent}
                          />
                          <Route exact path="/grades" component={Grades} />
                          <Route exact path="/tasks" component={Tasks} />
                          <Route exact path="/archive" component={Archive} />
                          <Route
                            exact
                            path="/roomsInside"
                            component={RoomsInside}
                          />
                          <Route exact path="/rooms" component={Rooms} />
                          <Route
                            exact
                            path="/time-table"
                            component={TimeTable}
                          />
                        </Layout>
                      </Switch>
                    </Route>
                  </>
                );
              } else;
              return (
                <Route>
                  <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/" component={LoginRedirect} />
                  </Switch>
                </Route>
              );
            }}
          </VirtuonContext.Consumer>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

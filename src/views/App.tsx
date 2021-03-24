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
const LessonTasks = lazy(() => import("./LessonTasks"));
const TaskDetail = lazy(() => import("./TaskDetail"));
const Archive = lazy(() => import("./Archive"));
const RoomsInside = lazy(() => import("./RoomsInside"));
const Login = lazy(() => import("./Login"));
const CreateEvent = lazy(() => import("./Event/CreateEvent"));
const Documents = lazy(() => import("./Documents"));
const Blog = lazy(() => import("./Blog"));
const BlogJournal = lazy(() => import("./BlogJournal"));
const BlogProfile = lazy(() => import("./BlogProfile"));

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
            {({ user, loading }) => {
              if (!loading) {
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
                            <Route
                              exact
                              path="/documents"
                              component={Documents}
                            />
                            <Route
                              exact
                              path="/tasks"
                              component={LessonTasks}
                            />
                            <Route
                              exact
                              path="/task/:id"
                              component={TaskDetail}
                            />
                            <Route exact path="/view-tasks" component={Tasks} />
                            <Route exact path="/blog" component={Blog} />
                            <Route
                              exact
                              path="/blogJournal"
                              component={BlogJournal}
                            />
                            <Route
                              exact
                              path="/blogProfile"
                              component={BlogProfile}
                            />
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
                } else
                  return (
                    <Route>
                      <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/" component={LoginRedirect} />
                      </Switch>
                    </Route>
                  );
              }
            }}
          </VirtuonContext.Consumer>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

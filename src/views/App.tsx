import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";
import 'semantic-ui-css/semantic.min.css';

const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));
const Rooms = React.lazy(() => import("./Rooms"));
const Grades = React.lazy(() => import("./Grades"));
const RoomsInside = React.lazy(() => import("./Rooms/RoomsInside/RoomsInside"));

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
              <Route exact path="/RoomsInside" component={RoomsInside} />
              <Route exact path="/time-table" component={TimeTable} />
            </Switch>
            <Switch>
              <Route exact path="/Rooms" component={Rooms} />
              <Route exact path="/Grades" component={Grades} />
              <Route exact path="/RoomsInside" component={RoomsInside} />
            </Switch>
          </Layout>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

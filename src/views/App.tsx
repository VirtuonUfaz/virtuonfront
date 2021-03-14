import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";

const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));
const Rooms = React.lazy(() => import("./Rooms"));
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
              <Route exact path="/RoomsInside" component={RoomsInside} />
            </Switch>
          </Layout>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

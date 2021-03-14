import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";

const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));
const Rooms = React.lazy(() => import("./Rooms"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route exact path="/Rooms" component={Rooms} />
            </Switch>
          </Layout>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

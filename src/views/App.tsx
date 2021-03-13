import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";

const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
          <Layout>
            <Switch>
              <Route exact path="/Home" component={Home} />
            </Switch>
          </Layout>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";

const Home = React.lazy(() => import("./Home"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

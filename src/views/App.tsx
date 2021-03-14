import React, {lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          {window.location.pathname === "/login" ? ( <Route exact path="/login" component={Login} />) : (<Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>)}
          
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

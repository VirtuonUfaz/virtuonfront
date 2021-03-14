import React, {lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const CreateEvent = lazy(() => import("./Event/CreateEvent"))
function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
          {window.location.pathname === "/login" ? ( <Route exact path="/login" component={Login} />) : (<Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/event/create" component={CreateEvent} />
            </Switch>
          </Layout>)}
          
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

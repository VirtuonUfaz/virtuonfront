import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "components/Layout";
import {VirtuonContext} from "../helpers/context/context"

import Archive from "./Archive";

const Home = lazy(() => import("./Home"));
const Rooms = lazy(() => import("./Rooms"));
const Grades = lazy(() => import("./Grades"));
const TimeTable = lazy(() => import("./TimeTable"));
const RoomsInside = lazy(() => import("./RoomsInside"));
const Login = lazy(() => import("./Login"));
const CreateEvent = lazy(() => import("./Event/CreateEvent"));



const RootRedirect = () => {
  return <Redirect to={`/home`} />;
};


function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading...</p>}>
           <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
          <VirtuonContext.Consumer>
            {({user}) => {
              console.log(user)
              if(user === undefined){
                console.log("true")
                return (
                    <Switch>
                      <Layout>
                        <Route exact path="/" component={RootRedirect} />
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/event/create" component={CreateEvent} />
                        <Route exact path="/Grades" component={Grades} />
                        <Route exact path="/rooms" component={Rooms} />
                        <Route exact path="/time-table" component={TimeTable} />
                      </Layout>
                    </Switch>
                  )
                
              } else
                return <Redirect to={`/login`} />
            }}      
          </VirtuonContext.Consumer>

        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

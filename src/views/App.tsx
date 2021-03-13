import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Layout from 'components/Layout';

function App() {
  return   (
    <Router>
      <div className="App">
        <Layout>
        
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );;
}

export default App;

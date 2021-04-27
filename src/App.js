
import './App.css';
import Schedule from './Schedule'
import Nav from './Nav'
import DatePicker from './DatePicker'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login'

function App() {
  return (
    <Router>
     <div className="App">
       <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <DatePicker />
            <Schedule />
          </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;

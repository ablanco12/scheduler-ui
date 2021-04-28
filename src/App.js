
import './App.css';
import Schedule from './Schedule'
import Nav from './Nav'
import DatePicker from './DatePicker'
import AdminDash from './AdminDash'
import MemberDash from './MemberDash'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
     <div className="App">
       <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Nav />
            <Schedule />
          </Route>
          <Route path="/admin">
            <Nav />
            <AdminDash />
          </Route>
          <Route path="/member">
            <Nav />
            <MemberDash />
          </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;

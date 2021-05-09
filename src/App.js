
import './App.css';
import Homepage from './components/homepage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';
import Header from './components/Header';
import About from './components/About';


function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
        <Route exact path="/menu">
           <Menu/>
          </Route>
          <Route path="/">
           <Homepage/>
          </Route>
          <Route exact path ="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;

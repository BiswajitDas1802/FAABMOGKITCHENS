
import './App.css';
import Homepage from './components/homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';
import Header from './components/Header';
import About from './components/About';
import {css} from "@emotion/core"
import PropagateLoader from 'react-spinners/PropagateLoader' ;
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false)
  const override = css` 
  display:block;
  border-color:red;
  margin-top:25%;
  margin-left:50%;
  margin-right:auto;
  `;

useEffect(() => {
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },4000)
}, [])



  return (
    <div className="app">
     {loading ? <PropagateLoader color={'#3d2514'} loading={loading} css={override} size={40}/>
      : 
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
       }
    </div>
  );
}

export default App;

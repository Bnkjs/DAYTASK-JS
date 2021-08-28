import React,{ useState } from 'react';
import './index.scss';
import { CardTaskContainer } from './component/card/cardTaskContainer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
export const App =() =>{
 
  return(
    <div id="container-app">
      <Router>
        <Switch>
          <Route exatc path="/">
            <CardTaskContainer/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
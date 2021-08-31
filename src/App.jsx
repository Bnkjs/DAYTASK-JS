import React,{createContext} from 'react';
import './index.scss';
import { CardTaskContainer } from './component/card/cardTaskContainer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux';
export const App =() =>{

  return(
      <Provider store={store} >
      <div id="container-app">
        <Router>
          <Switch>
            <Route exact path="/">
              <CardTaskContainer/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}
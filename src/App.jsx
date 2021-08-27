import React,{ useState } from 'react';
import './index.scss';
import { CardTaskContainer } from './component/card/cardTaskContainer';
export const App =() =>{
 
  return(
    <div id="container-app">
      <h1>Salut</h1>
      <p>Quelle mission veut-tu ajouter?</p>
      <CardTaskContainer/>
    </div>
  )
}
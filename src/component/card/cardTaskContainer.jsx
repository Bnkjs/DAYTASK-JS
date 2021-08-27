import react from 'react';
import { CardTask } from './cardTask';

export const CardTaskContainer=()=>{
  return(
  <div id='container-card-task'>
      <div className='card-task-header'>
        <div className="header-img"></div>
        <div className="header-task-count"></div>
        <div className="header-btn"></div>
      </div>
      <div className="task-content">
        <CardTask/>
      </div>
  </div>)
}
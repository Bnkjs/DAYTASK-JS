import react,{ useState } from 'react';
import { CardTask } from './cardTask';
import './card.scss';
import { FormTask } from '../form/form';
import { v4 as uuidv4 } from 'uuid';

export const CardTaskContainer=()=>{

  const [showTask, setShowTask] = useState(false);
  const itemsParsed = JSON.parse(localStorage.getItem('list-items'));
  
  const listItems = itemsParsed.map((items) => 
   <CardTask key={uuidv4().toString()} category={items.category} title={items.title} desc={items.description} />
  )

  return(
  <div id='container-card-task'>
    <FormTask/>
     <header>
      <h1>Salut</h1>
      <p>Quelle mission veux-tu ajouter?</p>
     </header>
      <div className='card-task-header'>
        <div className="header-btn">
          <button onClick={()=>{setShowTask(!showTask)}} >^</button>
        </div>
      </div>
      {
        showTask && <div className="task-content">
          {listItems}
      </div>
      }
  </div>)
}
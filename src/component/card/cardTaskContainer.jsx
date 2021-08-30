import react,{ useState, useEffect } from 'react';
import './card.scss';
import { FormTask } from '../form/form';
import { v4 as uuidv4 } from 'uuid';
import { TaskHeader } from '../card/cardHeader';
import { CardTask } from '../card/cardTask';

export const CardTaskContainer=()=>{
  const [category, setCategory]=useState('');
  const onChangeCategory = event => setCategory(event.target.value);
  const [title, setTitle] = useState('');
  const onChangeTitle= event => setTitle(event.target.value);
  const [description, setDescription] = useState('');
  const onChangeDescription = event => setDescription(event.target.value);
  const [taskList, setTaskList] = useState([])
  const newTaskList = {
    category: category,
    title: title,
    description:description
  }
   
 const handleSubmit=()=>{
  setTaskList(taskList => taskList.concat(newTaskList))
  }

  useEffect(()=>{
    console.log(taskList);
  })
  

  return(
  <div id='container-card-task'>
    <FormTask key={uuidv4().toString()} category={category} onChangeCategory={onChangeCategory} title={title} onChangeTitle={onChangeTitle} description={description} onChangeDescription={onChangeDescription} handleFunction={handleSubmit} />
     <header>
      <h1 >Salut</h1>
      <p>Quelle mission veux-tu ajouter?</p>
     </header>
     {
        taskList.map((items)=>{
          return(<>
            <TaskHeader key={uuidv4().toString()} category={items.category}/> 
            <div className="task-content">
              <CardTask key={uuidv4().toString()} category={items.category} title={items.title} desc={items.description}/>
            </div>
          </>) 
        })
      }
  </div>)
}
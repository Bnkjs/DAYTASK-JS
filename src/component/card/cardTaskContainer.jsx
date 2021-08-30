import react,{ useState, useEffect } from 'react';
import './card.scss';
import { FormTask } from '../form/form';
import { v4 as uuidv4 } from 'uuid';
import { TaskHeader } from '../card/cardHeader';
import { CardTask } from '../card/cardTask';

export const CardTaskContainer=()=>{
  const [category, setCategory]= useState("");
  const onChangeCategory = (e) => setCategory(e.target.value);
  const [title, setTitle] = useState("");
  const onChangeTitle = (e) => setTitle(e.target.value);
  const [description, setDescription] = useState("");
  const onChangeDescription = (e) => setDescription(e.target.value);
  const [taskList, setTaskList] = useState([])
  const newTaskList = {
    category: category,
    title: title,
    description:description
  }
   
 const handleSubmit=()=>{
  setTaskList(taskList => taskList.concat(newTaskList))
  }

  return(
  <div id='container-card-task'>
    <FormTask inputCategory={category} onChangeCat={onChangeCategory} inputTitle={title} onChangeTitle={onChangeTitle} inputDescription={description} onChangeDesc={onChangeDescription} handleFunction={handleSubmit} />
     <header> 
      <h1>Salut</h1>
      <p>Quelle mission veux-tu ajouter?</p>
     </header>
     {
      taskList.map((items)=>{
        return(<>
           <TaskHeader category={items.category}/> 
           <div className="task-content">
             <CardTask category={items.category} title={items.title} desc={items.description}/>
          </div>
        </>)})
      }
  </div>)
}
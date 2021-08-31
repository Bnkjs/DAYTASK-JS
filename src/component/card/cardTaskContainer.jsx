import react,{ useState, useEffect } from 'react';
import './card.scss';
import { FormTask } from '../form/form';
import { CardTask } from '../card/cardTask';
import addTask from '../../utils/addTask';

export const CardTaskContainer=()=>{
  const [category, setCategory]= useState("");
  const onChangeCategory = (e) => setCategory(e.target.value);
  const [title, setTitle] = useState("");
  const onChangeTitle = (e) => setTitle(e.target.value);
  const [description, setDescription] = useState("");
  const onChangeDescription = (e) => setDescription(e.target.value);
  const [taskList, setTaskList] = useState([])
  const [id, setId] = useState(0)
  
  const newTaskList= addTask.addTaskList(id, category, title, description)
   
 const handleSubmit=()=>{
  setTaskList(taskList => taskList.concat(newTaskList))
  localStorage.setItem('list-items', JSON.stringify(taskList))
  setId(id + 1)
  }
  const handleRemoveItem=(index)=>{
    setTaskList(taskList.filter(item => item.id !== index))
  }
  
    useEffect(()=>{
  },[handleRemoveItem])

  return(
  <div id='container-card-task'>
    <FormTask inputCategory={category} onChangeCat={onChangeCategory} inputTitle={title} onChangeTitle={onChangeTitle} inputDescription={description} onChangeDesc={onChangeDescription} handleFunction={handleSubmit} />
     <header> 
      <h1>Salut</h1>
      <p>Quelle mission veux-tu ajouter?</p>
     </header>
     {
      taskList.map((item, index)=>{
        return(<>
         <div className="task-header-category">
             <CardTask key={item.id} category={item.category} title={item.title} desc={item.description} handlefunct={()=>handleRemoveItem(index)}/>
        </div>
        </>)})
      }
     </div>)
    
 
}
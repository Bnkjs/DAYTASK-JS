import react,{ useState, useEffect } from 'react';
import './card.scss';
import { FormTask } from '../form/form';
import { CardTask } from '../card/cardTask';
import addTask from '../../utils/addTask';
import { v4 as uuidv4 } from 'uuid';
import { NotyfSuccessTask } from '../notifications';
import { NotyfErrorTask } from '../notifications';

export const CardTaskContainer=()=>{
  const [category, setCategory] = useState("");
  const onChangeCategory = (e) => setCategory(e.target.value);
  const [title, setTitle] = useState("");
  const onChangeTitle = (e) => setTitle(e.target.value);
  const [description, setDescription] = useState("");
  const onChangeDescription = (e) => setDescription(e.target.value);
  const [taskList, setTaskList] = useState([])
  const [id, setId] = useState(0)
  const newTaskList= addTask.addTaskList(id, category, title, description)
   
 const handleSubmit=(e)=>{
  if (category && title && description !== ""){
      setTaskList(taskList => taskList.concat(newTaskList))
      setTaskList(taskList => taskList.sort((a,b)=>{ return (a.category > b.category) ? -1 : 1}))
      localStorage.setItem('list-items', JSON.stringify(taskList))
      setId(id + 1)
      NotyfSuccessTask()
    } else{
      e.preventDefault()
      NotyfErrorTask()
      console.log(category, title, description);
    } 
  }
  const handleRemoveItem=(index)=>{
    setTaskList(taskList.filter(item => item.id !== index))
  }
    useEffect(()=>{
  },[handleSubmit,handleRemoveItem])

  return(
  <div id='container-card-task'>
    <header> 
      <h1>Salut 👋</h1>
      <p>Quelle mission veux-tu ajouter?</p>
     </header>
    <FormTask inputCategory={category} onChangeCat={onChangeCategory} inputTitle={title} onChangeTitle={onChangeTitle} inputDescription={description} onChangeDesc={onChangeDescription} handleFunction={handleSubmit} />
    <h4>Tâches ajoutées</h4>
     {
      taskList.map((item, index)=>{
        return(<>
             <CardTask key={uuidv4().toString()} category={item.category} title={item.title} desc={item.description} handlefunct={()=>handleRemoveItem(index)}/>
        </>)})
      }
     </div>)
    
 
}
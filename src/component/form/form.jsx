import './form.scss'
import react,{ useState } from 'react';

export const FormTask=()=>{
  const [catgeory, setCategory]=useState('');
  const onChangeCategory = event => setCategory(event.target.value);
  const [title, setTitle] = useState('');
  const onChangeTitle= event => setTitle(event.target.value);
  const [description, setDescription] = useState('');
  const onChangeDescription = event => setDescription(event.target.value);

  const handleSubmit=()=>{
    console.log(title, catgeory, description);
  }
  
  return(
    <div id='form-container'>
      <form className="form-task">
        <div className='wrap-content'>
          <label htmlFor="">Catégorie de la tâche</label>
          <input type="text" placeholder="Boulot, Maison.." name='catégory' id="category" onChange={onChangeCategory} />
        </div>
        <div className='wrap-content'>
          <label htmlFor="">Titre de la tâche</label>
          <input type="text" placeholder="Courses..." name='title'  id='title' onChange={onChangeTitle}/>
        </div>
        <div className='wrap-content'>
        <label htmlFor="">Description de la tâche</label>
        <input type="text" placeholder='acheter pâtes, beurre..' name='description' id='description' onChange={onChangeDescription}/>
        </div>
      </form>
      <button onClick={handleSubmit} >Ajouter la tâche</button>


    </div>
  )
}
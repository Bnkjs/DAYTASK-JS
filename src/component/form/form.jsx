import { v4 as uuidv4 } from 'uuid';
import './form.scss'
export const FormTask=({category, title, description, onChangeCategory, onChangeDescription, onChangeTitle, handleFunction})=>{
  return(
    <div  id='form-container'>
      <form className="form-task">
        <div className='wrap-content'>
          <label htmlFor="">Catégorie de la tâche</label>
          <input type="text" placeholder="Boulot, Maison.." name='catégory' id="category" onChange={onChangeCategory} value={category} />
        </div>
        <div className='wrap-content'>
          <label htmlFor="">Titre de la tâche</label>
          <input type="text" placeholder="Courses..." name='title'  id='title' onChange={onChangeTitle} value={title}/>
        </div>
        <div className='wrap-content'>
        <label htmlFor="">Description de la tâche</label>
        <input type="text" placeholder='acheter pâtes, beurre..' name='description' id='description'  onChange={onChangeDescription} value={description}/>
        </div>
      </form>
      <button onClick={handleFunction}>Ajouter la tâche</button>
    </div>
    
  )
}
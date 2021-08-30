import './form.scss';
import { v4 as uuidv4 } from 'uuid';
export const FormTask=({inputCategory, inputTitle, inputDescription, onChangeCat, onChangeDesc, onChangeTitle, handleFunction})=>{
  return(
    <div  id='form-container'>
      <form className="form-task">
        <div className='wrap-content'>
          <label htmlFor="">Catégorie de la tâche</label>
          <input type="text" name='catégory' id="category" placeholder="Boulot, Maison.." value={inputCategory} onChange={onChangeCat}/>
        </div>
        <div className='wrap-content'>
          <label htmlFor="">Titre de la tâche</label>
          <input type="text" placeholder="Courses..." name='title'  id='title' value={inputTitle} onChange={onChangeTitle}/>
        </div>
        <div className='wrap-content'>
        <label htmlFor="">Description de la tâche</label>
        <input type="text" placeholder='acheter pâtes, beurre..' name='description' id='description' value={inputDescription} onChange={onChangeDesc} />
        </div>
      </form>
      <button onClick={handleFunction}>Ajouter la tâche</button>
    </div>
    
  )
}
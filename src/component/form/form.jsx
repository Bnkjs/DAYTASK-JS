import './form.scss';
import { v4 as uuidv4 } from 'uuid';
export const FormTask=({inputCategory, inputTitle, inputDescription, onChangeCat, onChangeDesc, onChangeTitle, handleFunction})=>{  
  return(
    <div id='form-container'>
      <form className="form">
        <div className='wrap-content'>
          <label htmlFor="">Catégorie</label>
          <input type="text" name='catégory' id="category" placeholder=" Maison; boulot..." value={inputCategory} onChange={onChangeCat}/>
        </div>
        <div className='wrap-content'>
          <label htmlFor="">Titre</label>
          <input type="text" placeholder="Courses; reunion..." name='title'  id='title' value={inputTitle} onChange={onChangeTitle}/>
        </div>
        <div className='wrap-content'>
        <label htmlFor="">Description</label>
        <input type="text" placeholder='Acheter beurre; meeting tech...' name='description' id='description' value={inputDescription} onChange={onChangeDesc} />
        </div>
      </form>
      <button className='btn-action' onClick={handleFunction}>Ajouter la tâche</button>
    </div>
    
  )
}
import { v4 as uuidv4 } from 'uuid';

export const TaskHeader=({category, img, hook})=>{
  return(
    <div  className='card-task-header'>
     <div className="task-header-img">{}</div>
        <div key={uuidv4().toString()} className="task-header-category">{category}</div>
    </div>
  )
}
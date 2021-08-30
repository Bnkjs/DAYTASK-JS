import {useState } from 'react';

export const CardTask=({category,title,desc})=>{
  const [showTask, setShowTask] = useState(false);

  return(<>
          <div className="header-btn">
           <button onClick={()=>{setShowTask(!showTask)}} >^</button>
          </div>
    {showTask &&
      <div id="task-container">
        <div className="task-header">{category}</div>
        <div className="task-content">{title}</div>
        <div className="task-validate">{desc}</div>
      </div>
    }
  </>)
}
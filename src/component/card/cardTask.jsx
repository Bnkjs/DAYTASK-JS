import { DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

export const CardTask=({category,title,desc, handlefunct})=>{
  const [showTask, setShowTask] = useState(false);
  return(<>
      <div className='task-header-container'>
          <div className="task-header-img">🌞</div>
          <div className="hr-header"></div>
          <div key={uuidv4().toString()}>{category}</div>
          <div className="header-btn">
              <button onClick={()=>{setShowTask(!showTask)}}>^</button>
            </div>
          </div>
          <div id="task-container">
            {showTask && 
              <div id="task-content" >
                <div  className="task-header">{category}</div>
                <div className="task-content">{title}</div>
                <div className="task-validate">{desc}</div>
                <div className="trash-icon">
                <DeleteOutlined onClick={handlefunct}/>
                </div>
              </div>
            }
        </div>
    </>)
}
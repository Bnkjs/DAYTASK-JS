import { DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';
import { DownOutlined, UpOutlined ,SaveOutlined } from '@ant-design/icons';

export const CardTask=({category,title,desc, handlefunct})=>{
  const [showTask, setShowTask] = useState(false);
  return(<>
      <div className='task-header-container'>
          <div className="task-header-img">
            <SaveOutlined/>
          </div>
          <div className="hr-header"></div>
          <div>{category}</div>
         {showTask?
          <UpOutlined className="header-btn" color="#fff" onClick={()=>{setShowTask(!showTask)}}></UpOutlined>
            :
          <DownOutlined className="header-btn" onClick={()=>{setShowTask(!showTask)}}></DownOutlined>
         }
          </div>
          <div id="task-container">
            {showTask && 
              <div id="task-content">
                <div className='task-info'>
                  <p className="task-title">{title}</p>
                  <p className="task-desc">{desc}</p>
                </div>
                <DeleteOutlined className="trash-icon" onClick={handlefunct}/>
              </div>
            }
        </div>
    </>)
}
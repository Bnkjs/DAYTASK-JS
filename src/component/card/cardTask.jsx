export const CardTask=({category,title,desc})=>{
  return(<>
  <div id="task-container">
    <div className="task-header">{category}</div>
    <div className="task-content">{title}</div>
    <div className="task-validate">{desc}</div>
  </div>
  </>)
}
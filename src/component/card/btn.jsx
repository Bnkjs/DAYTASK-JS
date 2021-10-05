import './card.scss';

export const MyBtn = ({title, handlefunction})=>{
  return <button onClick={handlefunction}>{title}</button>
}
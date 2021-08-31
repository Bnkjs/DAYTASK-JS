import { SHOW_TASK } from "./showtaskType";
import { HIDE_TASK } from "./showtaskType";

const initialState = {
  active: false
};

export const showTaskReducer = (state = initialState, action)=>{
  switch(action.type){
    case SHOW_TASK:
      return {
        ...state,
        active: state.active = false
      };
      case HIDE_TASK:
        return {
          ...state,
          active: state.active = true
        };
      default: 
      return state
  }
}

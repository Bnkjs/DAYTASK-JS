import { SHOW_TASK } from "./showtaskType";
import { HIDE_TASK } from "./showtaskType";

export const showTaskAction = (isTrue) => {
  return {
    type: SHOW_TASK,
    isTrue
  }
}

export const hideTaskAction = (isFalse) => {
  return {
    type: HIDE_TASK,
    isFalse
  }
}

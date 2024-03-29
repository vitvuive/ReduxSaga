import { INCREMENT, DECREMENT } from "./actionType";

export const incrementAction = step => {
  return {
    type: INCREMENT,
    step: step
  };
};

export const decrementAction = step => {
  return {
    type: DECREMENT,
    step: step
  };
};

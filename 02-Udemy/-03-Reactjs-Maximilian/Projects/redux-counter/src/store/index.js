import { createStore } from "redux";

const counterReducer = function (state = { counter: 0 }, action) {
  if (action.type === "increment") return { counter: state.counter + 1 };
  if (action.type === "decrement") return { counter: state.counter - 1 };
  return { counter: state.counter };
};

const store = createStore(counterReducer);

export default store;

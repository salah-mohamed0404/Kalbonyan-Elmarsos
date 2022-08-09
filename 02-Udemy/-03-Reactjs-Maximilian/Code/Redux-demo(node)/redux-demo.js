const redux = require("redux");

const counterReducer = function (state = { counter: 0 }, action) {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };
  if (action.type === "decrement")
    return {
      counter: state.counter - 1,
    };

  return {
    counter: state.counter,
  };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = function () {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

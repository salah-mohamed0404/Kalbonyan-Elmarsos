import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = function (shouldListen = true) {
  const setState = useState(globalState)[1];

  const dispatch = (actionId, payloud) => {
    const newState = actions[actionId](globalState, payloud);
    globalState = { ...globalState, ...newState };

    listeners.forEach(li => {
      li(globalState);
    });
  };

  useEffect(() => {
    if (shouldListen) listeners.push(setState);

    return () => {
      if (shouldListen) listeners = listeners.filter(li => li !== setState);
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = function (userAction, initState) {
  if (initState) {
    globalState = { ...globalState, ...initState };
  }
  actions = { ...actions, ...userAction };
};

export default function createStore(counter) {
  let currentState = counter();
  let listeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    currentState = counter(currentState, action.type);

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      if (typeof listener === "function") listener();
    }

    return action;
  }
  const store = {
    getState,
    dispatch,
    subscribe,
  };
  return store;
}

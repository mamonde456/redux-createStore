import createStore from "./createStore.js";

const value = document.querySelector("#value");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const INCREMENT = "increment";
const DECREMENT = "decrement";

function counter(state = 0, action) {
  if (action === INCREMENT) return state + 1;
  if (action === DECREMENT) return state - 1;
  return state;
}

const store = createStore(counter);

store.subscribe(() => (value.innerText = store.getState()));

plus.addEventListener("click", () => store.dispatch({ type: INCREMENT }));
minus.addEventListener("click", () => store.dispatch({ type: DECREMENT }));

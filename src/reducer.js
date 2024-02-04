// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("Welcome to Programiz!");
function reducer(state, action) {
  switch (action.type) {
    case "even":
      return { ...state, even: state.even + action.payload };
    case "odd":
      return { ...state, odd: state.odd + action.payload };
    default:
      return state;
  }
}

const initialaccumulator = { odd: 0, even: 0 };

const numList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "even", payload: 4 },
  { type: "even", payload: 6 },
  { type: "odd", payload: 5 },
];

const values = numList.reduce(reducer, initialaccumulator);

console.log(values);

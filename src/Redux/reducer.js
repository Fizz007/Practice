import { ADDNUM, CHANGE_USER, DECSUM } from "./actionTypes";

const initalState = {
  number: 0,
  name: "faisal",
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case ADDNUM:
      return {
        ...state,
        number: state.number + 1,
      };

    case DECSUM:
      return {
        ...state,
        number: state.number - 1,
      };

    case CHANGE_USER:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;

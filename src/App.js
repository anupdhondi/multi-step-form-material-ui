import React, { useReducer } from "react";

import UserDetails from "./components/UserDetails";
import PersonalDetails from "./components/PersonalDetails";
import Success from "./components/Success";
import Confirm from "./components/Confirm";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGED":
      return { ...state, [action.id]: action.value };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
};

export default function DenseAppBar() {
  const [state, dispatch] = useReducer(reducer, { step: 1, firstName: "", lastName: "", email: "", occupation: "", city: "", bio: "" });

  const nextHandler = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const prevHandler = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const inputChangedHandler = (id, value) => {
    dispatch({ type: "INPUT_CHANGED", id, value });
  };

  return (
    <div>
      {state.step === 1 && <UserDetails state={state} next={nextHandler} inputChanged={inputChangedHandler} />}
      {state.step === 2 && <PersonalDetails state={state} next={nextHandler} prev={prevHandler} inputChanged={inputChangedHandler} />}
      {state.step === 3 && <Confirm state={state} next={nextHandler} prev={prevHandler} />}
      {state.step === 4 && <Success state={state} />}
    </div>
  );
}

import React, { useReducer } from "react";
import PageContext from "./pageContext";
import PageReducer from "./pageReducer";
import { NEXT_PAGE, PREV_PAGE } from "../types";

const PageState = props => {
  const initialState = {
    step: 1
  };

  const [state, dispatch] = useReducer(PageReducer, initialState);

  const nextStep = () => {
    dispatch({
      type: NEXT_PAGE,
      payload: state.step < 4 ? state.step + 1 : 4
    });
  };

  const prevStep = () => {
    dispatch({
      type: PREV_PAGE,
      payload: state.step > 1 ? state.step - 1 : 1
    });
  };

  return (
    <PageContext.Provider
      value={{
        step: state.step,
        nextStep,
        prevStep
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;

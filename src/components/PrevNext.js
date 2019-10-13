import React, { useContext } from "react";
import PageContext from "../context/pagination/pageContext";

const PrevNext = () => {
  const pageContext = useContext(PageContext);

  const { nextStep, prevStep } = pageContext;

  return (
    <>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </>
  );
};

export default PrevNext;

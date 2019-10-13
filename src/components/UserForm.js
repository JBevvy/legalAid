import React, { useContext } from "react";
import PrevNext from "./PrevNext";
import Amount from "./Amount";
import Income from "./Income";
import Capital from "./Capital";
import Results from "./Results";
import PageContext from "../context/pagination/pageContext";

const UserForm = () => {
  const pageContext = useContext(PageContext);

  const { step } = pageContext;
  switch (step) {
    case 1:
      return (
        <>
          <Amount />
          <PrevNext />
        </>
      );
    case 2:
      return (
        <>
          <Income />
          <PrevNext />
        </>
      );
    case 3:
      return (
        <>
          <Capital />
          <PrevNext />
        </>
      );
    case 4:
      return (
        <>
          <Results />
          <PrevNext />
        </>
      );
    default:
      return null;
  }
};

export default UserForm;

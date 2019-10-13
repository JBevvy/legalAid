import React from "react";
import "./App.css";
import PageState from "./context/pagination/pageState";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <PageState>
      <UserForm />
    </PageState>
  );
};

export default App;

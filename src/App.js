/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NewIssueComponent } from "./components/NewIssueComponent";
import { IssueContext, useIssueContext } from "./logic/IssueContext";

function App() {
  const myContext = React.useContext(IssueContext);
  //description, severity, type, assigned, id
  if (!localStorage.getItem("Issues")) {
    const myissues = [];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [issues, setIssues] = React.useState(myissues);
    localStorage.setItem("Issues", JSON.stringify(issues));
  } else {
    const myissues = JSON.parse(localStorage.getItem("Issues"));
    const [issues, setIssues] = React.useState(myissues);
  }
  return (
    <div className="App">
      {console.log(myContext)}
      <Header />
      <NewIssueComponent />
    </div>
  );
}

export default App;

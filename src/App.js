/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NewIssueComponent } from "./components/NewIssueComponent";
import { IssueContext, useIssueContext } from "./logic/IssueContext";
<script src="https://cdnjs.cloudflare.com/ajax/libs/node-uuid/1.4.7/uuid.min.js"></script>;

function App() {
  const myContext = React.useContext(IssueContext);
  var myissues = [];
  var myIds = [];
  //description, severity, type, assigned, id
  if (!localStorage.getItem("Issues")) {
    localStorage.setItem("Issues", JSON.stringify(myissues));
    localStorage.setItem("Ids", JSON.stringify(myIds));
  } else {
    myissues = JSON.parse(localStorage.getItem("Issues"));
    myIds = JSON.parse(localStorage.getItem("Ids"));
  }
  const [issues, setIssues] = React.useState(myissues);
  const [ids, setIds] = React.useState(myIds);
  return (
    <div className="App">
      {console.log(myContext)}
      <Header />
      <NewIssueComponent />
    </div>
  );
}

export default App;

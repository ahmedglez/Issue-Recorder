/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NewIssueComponent } from "./components/NewIssueComponent";
import { IssueContext } from "./logic/IssueContext";
import { IssuesList } from "./components/IssuesList";

<script src="https://cdnjs.cloudflare.com/ajax/libs/node-uuid/1.4.7/uuid.min.js"></script>;

function App() {
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

  const [Issues, setIssues] = React.useState(myissues);
  const [Ids, setIds] = React.useState(myIds);
  const totalIssues = Issues.length;

  const [showList, SetShowList] = React.useState(false);

  return (
    <div className="App">
      <IssueContext.Provider
        value={{
          Issues,
          setIssues,
          Ids,
          setIds,
          totalIssues,
          showList,
          SetShowList,
        }}
      >
        <Header />
        <NewIssueComponent
          showList={showList}
          SetShowList={SetShowList}
          issues={Issues}
          ids={Ids}
        />
        {showList === true && <IssuesList issues={Issues} />}
      </IssueContext.Provider>
    </div>
  );
}

export default App;

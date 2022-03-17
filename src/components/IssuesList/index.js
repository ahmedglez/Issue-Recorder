import React from "react";
import "./style.css";
import { IssueContainer } from "../IssueContainer";

function IssuesList(props) {
  var issues = props.issues;
  var message = "";
  if (props.issues.length === 0) {
    message = "Empty Record";
  } else {
    message = "Issue Record";
  }
  return (
    <div className="list-container">
      <h2 className="list-container-title">{message}</h2>
      <div className="issues-container">
        {issues.map((issue) => {
          return (
            <IssueContainer
              className="issue-container"
              issue={issue}
              key={issue.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export { IssuesList };

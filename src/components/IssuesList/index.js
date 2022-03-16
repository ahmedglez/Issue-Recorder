import React from "react";
import "./style.css";
import { IssueContainer } from "../IssueContainer";

function IssuesList(props) {
  return (
    <div className="issue-container">
      {props.Issues.map((issue) => {
        <IssueContainer issue={issue} />;
      })}
    </div>
  );
}

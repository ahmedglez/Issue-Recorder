import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Issue } from "./IssueClass";

function useIssues() {
  let issues = [];
  issues = localStorage.getItem("Issues");

  const addIssue = (issue) => {
    issues.push(issue);
    localStorage.setItem("Issues", issues);
  };

  const removeIssue = (id) => {
    let a = true;
    for (let i = 0; i < issues.length && a === true; i++) {
      if (issues[i].id == id) {
        issues.splice(i, 1);
        localStorage.setItem("Issues", issues);
        a = false;
      }
    }
  };

  const getIssuebyID = (id) => {
    let a = true;
    for (let i = 0; i < issues.length && a === true; i++) {
      if (issues[i].id == id) {
        return issues[i];
        a = false;
      }
    }
  };
}

export { useIssues };

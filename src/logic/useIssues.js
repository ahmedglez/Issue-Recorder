import React from "react";

function useIssues() {
  var myissues = JSON.parse(localStorage.getItem("Issues"));
  const [issues, setIssues] = React.useState(myissues);

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

  return { addIssue, removeIssue, getIssuebyID };
}

export { useIssues };

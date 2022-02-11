import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Issue } from "./IssueClass";

function useTodos() {
  const {
    item: issues,
    saveItem: saveIssue,
    sincronize: sincronizedIssue,
    loading,
    error,
  } = useLocalStorage("ISSUES_V1", []);

  const [searchIssue, setSearchIssue] = React.useState("");
  const totalIssues = issues.length;

  let searchedIssues = [];

  if (!searchedIssues.length === 0) {
    searchedIssues = issues;
  } else {
    searchedIssues = issues.filter((issue) => {
      const issueText = issue.text.toLowerCase();
      const searchText = searchIssue.toLowerCase();
      return issueText.includes(searchText);
    });
  }

  const addIssue = (issue) => {
    const newIssues = [...issues];
    const myissue = new Issue(
      issue.description,
      issue.severity,
      issue.type,
      issue.assigned,
      issue.id
    );
    newIssues.push(myissue);
    saveIssue(newIssues);
  };

  const deleteIssue = (id) => {
    const issueIndex = issues.findIndex((iss) => iss.id === id);
    const newIssues = [...issues];
    newIssues.splice(issueIndex, 1);
    saveIssue(newIssues);
  };

  return (
    loading,
    error,
    searchIssue,
    searchedIssues,
    totalIssues,
    addIssue,
    deleteIssue
  );
}

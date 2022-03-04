import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useIssues } from "./useIssues.js";

const IssueContext = React.createContext(null);
const {
  issues,
  totalIssues,
  loading,
  error,
  searchIssue,
  searchedIssues,
  addIssue,
  deleteIssue,
} = useIssues;

function useIssueContext(props) {
  return (
    <IssueContext.Provider
      value={{
        issues,
        totalIssues,
        loading,
        error,
        searchIssue,
        searchedIssues,
        addIssue,
        deleteIssue,
      }}
    >
      {props.children}
    </IssueContext.Provider>
  );
}
export { IssueContext, useIssueContext };

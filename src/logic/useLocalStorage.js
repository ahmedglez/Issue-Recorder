import React from "react";

function useLocalStorage(issueKey, issueValue) {
  const [issues, setIssues] = React.useState(issueValue);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(loading);
  const [sincronizedIssue, setSincronizedIssue] = React.useState(true);

  React.useEffect(() => {
    try {
      const localStorageIssue = localStorage.getItem(issueKey);
      let parsedIssue;
      if (!localStorageIssue) {
        localStorage.setIssues(issueKey, JSON.stringify(issueValue));
        parsedIssue = issueValue;
      } else {
        parsedIssue = JSON.parse(localStorageIssue);
      }
      setIssues(parsedIssue);
    } catch (error) {
      setError(error);
      console.log(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sincronizedIssue]);

  const saveIssue = (newIssue) => {
    try {
      const stringifiedIssue = JSON.stringify(newIssue);
      localStorage.setItem(issueKey, stringifiedIssue);
      setIssues(newIssue);
    } catch (error) {
      setError(error);
      console.log(error.message);
    }
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizedIssue(false);
  };

  return {
    issues,
    saveIssue,
    loading,
    error,
    sincronize,
  };
}

export { useLocalStorage };

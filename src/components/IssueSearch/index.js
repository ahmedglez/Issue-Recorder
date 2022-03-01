import React from "react";

import "./style.css";

function IssueSearch({ searchedIssue, setSearchIssue }) {
  const onSearchValue = (event) => {
    console.log(searchedIssue);
    setSearchIssue(event.target.value);
  };

  return (
    <input
      type="text"
      className="issue-search"
      placeholder="Write ID or author"
      value={searchedIssue}
      onChange={onSearchValue}
    />
  );
}

export { IssueSearch };

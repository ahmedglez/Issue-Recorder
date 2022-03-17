/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function IssueContainer(props) {
  var issue = props.issue;
  const [openModal, setOpenModal] = React.useState(false);
  let message = "";
  const showModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="issue-container">
      <h2>Issue ID: {issue.id}</h2>
      <h2>Author: {issue.responsable}</h2>
      <h2>Date: {issue.date}</h2>
      {openModal === true && (
        <div>
          <h2>Description: {issue.description}</h2>
          <h2>Type: {issue.type}</h2>
          <h2>Severity: {issue.severity}</h2>
        </div>
      )}

      <div>
        <button id="issue-button" type="button" onClick={showModal}>
          {openModal === true
            ? (message = "Close Details")
            : (message = "More Details")}
        </button>
      </div>
    </div>
  );
}

export { IssueContainer };

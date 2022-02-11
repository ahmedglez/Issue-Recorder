import React from "react";
import "./style.css";
import AiOutlineDown from "react-icons/ai";

function NewIssueComponent(props) {
  return (
    <div className="newIssue-container">
      <h2>Add New Issue:</h2>
      <form className="newIssue-form" action="">
        <div className="input-container">
          <label for="input--description">Description</label>
          <input
            type="text"
            id="input--description"
            placeholder="Add a description..."
          />
        </div>

        <div className="input-container">
          <label for="input--severity">Severity</label>
          <select id="input--severity" name="input--severity">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="input-container">
          <label for="input--type">Type</label>
          <input id="input--type" type="text" placeholder="E.g: SyntaxError" />
        </div>

        <div className="input-container">
          <label for="input--responsable">Assigned to</label>
          <input id="input--responsable" type="text" placeholder="John Boe" />
        </div>

        <button id="submit-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export { NewIssueComponent };

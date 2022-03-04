import React from "react";
import "./style.css";

function NewIssueComponent(props) {
  const addIssue = () => {
    const mybutton = document.getElementById("submit-button");
    const description = document.getElementById("input--description");
    const severity = document.getElementById("input--severity");
    const type = document.getElementById("input--type");
    const responsable = document.getElementById("input--responsable");

    const issues = JSON.parse(localStorage.getItem("Issues"));
    console.log(issues);
    let generateId = Math.random().toString(36).substr(2, 36);

    issues.push({
      description: description.value,
      severity: severity.value,
      type: type.value,
      responsable: responsable.value,
      id: generateId,
    });

    localStorage.setItem("Issues", JSON.stringify(issues));
    console.log(issues.length);
  };

  return (
    <div className="newIssue-container">
      <h2>Add New Issue:</h2>
      <form className="newIssue-form" action="">
        <div className="input-container">
          <label htmlFor="input--description">Description</label>
          <input
            type="text"
            id="input--description"
            placeholder="Add a description..."
          />
        </div>

        <div className="input-container">
          <label htmlFor="input--severity">Severity</label>
          <select id="input--severity" name="input--severity">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="input--type">Type</label>
          <input id="input--type" type="text" placeholder="E.g: SyntaxError" />
        </div>

        <div className="input-container">
          <label htmlFor="input--responsable">Assigned to</label>
          <input id="input--responsable" type="text" placeholder="John Boe" />
        </div>

        <button id="submit-button" type="button" onClick={addIssue}>
          Add
        </button>
      </form>
      <script src="./logic.js"></script>
    </div>
  );
}

export { NewIssueComponent };

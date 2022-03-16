import React from "react";
import "./style.css";

function NewIssueComponent(props) {
  function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  var issues = JSON.parse(localStorage.getItem("Issues"));
  var ids = JSON.parse(localStorage.getItem("Ids"));
  console.log(issues);
  console.log(ids);
  let generateId = generateUUID();

  while (ids.includes(generateId)) {
    generateId = generateUUID();
  }

  const addIssue = () => {
    const mybutton = document.getElementById("submit-button");
    const description = document.getElementById("input--description");
    const severity = document.getElementById("input--severity");
    const type = document.getElementById("input--type");
    const responsable = document.getElementById("input--responsable");

    if (
      description.value.length !== 0 &&
      type.value.length !== 0 &&
      responsable.value.length !== 0
    ) {
      if (!ids.includes(generateId)) {
        issues.push({
          description: description.value,
          severity: severity.value,
          type: type.value,
          responsable: responsable.value,
          id: generateId,
        });

        ids.push(generateId);
      }
    } else {
      alert("Fill in all the empty spaces");
    }

    localStorage.setItem("Issues", JSON.stringify(issues));
    console.log(issues);
    console.log(ids);
  };

  return (
    <div className="newIssue-container">
      <h2>Add New Issue:</h2>
      <form className="newIssue-form" action="">
        <div className="input-container">
          <label htmlFor="input--id">Issue ID</label>
          <input
            type="text"
            id="input--id"
            disabled="true"
            value={generateId}
          />
        </div>
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
      <div id="showMore-button"></div>
      <script src="./logic.js"></script>
    </div>
  );
}

export { NewIssueComponent };

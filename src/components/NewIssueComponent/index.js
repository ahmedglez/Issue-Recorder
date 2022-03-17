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

  var issues = props.issues;
  var ids = props.ids;

  let generateId = generateUUID();

  while (ids.includes(generateId)) {
    generateId = generateUUID();
  }
  var showMessage = "";
  if (props.showList === false) {
    showMessage = "Show List";
  } else {
    showMessage = "Hide List";
  }
  const onShowList = () => {
    props.SetShowList(!props.showList);
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  };

  const addIssue = () => {
    const mybutton = document.getElementById("submit-button");
    const description = document.getElementById("input--description");
    const severity = document.getElementById("input--severity");
    const type = document.getElementById("input--type");
    const responsable = document.getElementById("input--responsable");

    var tiempoTranscurrido = Date.now();
    var hoy = new Date(tiempoTranscurrido);

    if (
      description.value.length !== 0 &&
      type.value.length !== 0 &&
      responsable.value.length !== 0
    ) {
      issues.push({
        description: description.value,
        severity: severity.value,
        type: type.value,
        responsable: responsable.value,
        id: generateId,
        date: hoy.toDateString(),
      });

      ids.push(generateId);
    } else {
      alert("Fill in all the empty spaces");
    }

    localStorage.setItem("Issues", JSON.stringify(issues));
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
            disabled={true}
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

        <button id="submit-button" type="submit" onClick={addIssue}>
          Add
        </button>
      </form>
      <div id="showList-button-container">
        <button id="showList-button" type="button" onClick={onShowList}>
          <div id="t-button-container">
            {props.showList === true ? (
              <p className="show" id="t-button">
                {showMessage}
              </p>
            ) : (
              <p className="close" id="tc-button">
                {showMessage}
              </p>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export { NewIssueComponent };

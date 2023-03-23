import React, { useState } from "react";

function Education() {
  const [stages, setStages] = useState([]);
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [dateFinished, setDateFinished] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [stageEdited, setStageEdited] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);

    if (!showForm) {
      setInstitution("");
      setDegree("");
      setDateFinished("");
      setStageEdited(null);
    }
  };

  const addStage = (e) => {
    e.preventDefault();

    const newStages = [...stages];
    const changeStage = {
      institution,
      degree,
      dateFinished,
    };

    if (stageEdited) {
      newStages[stageEdited] = changeStage;
    } else {
      newStages.push(changeStage);
    }

    setStages(newStages);
    setInstitution("");
    setDegree("");
    setDateFinished("");
    setShowForm(false);
    setStageEdited(null);
  };

  const editStage = (e) => {
    const stageId = e.target.dataset.key;
    const stage = stages[stageId];
    setInstitution(stage.institution);
    setDegree(stage.degree);
    setDateFinished(stage.dateFinished);
    setShowForm(true);
    setStageEdited(stageId);
  };

  const deleteStage = (e) => {
    const stageId = e.target.dataset.key;
    const newStages = [...stages];
    newStages.splice(stageId, 1);
    setStages(newStages);
  };

  const handleChange = (e) => {
    const stateHandler = {
      institution: setInstitution,
      degree: setDegree,
      dateFinished: setDateFinished,
    };

    stateHandler[e.target.name](e.target.value);
  };

  const stageList = stages.map((stage, index) => (
    <div key={index} className="stage">
      <div className="actions">
        <button className="edit" onClick={editStage} data-key={index}>
          Edit
        </button>
        <button className="delete" onClick={deleteStage} data-key={index}>
          Delete
        </button>
      </div>
      <div className="data-row">
        <div className="label">Institution</div>
        <div className="institution">{stage.institution || "-"}</div>
      </div>
      <div className="data-row">
        <div className="label">Degree</div>
        <div className="degree">{stage.degree || "-"}</div>
      </div>
      <div className="data-row">
        <div className="label">Date finished</div>
        <div className="date-finished">
          {stage.dateFinished === "" ? "-" : new Date(stage.dateFinished).toLocaleDateString()}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="education">
      <h2>Education</h2>
      {stageList}
      {showForm && (
        <form onSubmit={addStage}>
          <div className="form-row">
            <label htmlFor="institution">Institution</label>
            <input type="text" name="institution" id="institution" value={institution} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="degree">Degree</label>
            <input type="text" name="degree" id="degree" value={degree} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="dateFinished">Date finished</label>
            <input type="date" name="dateFinished" id="dateFinished" value={dateFinished} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
        </form>
      )}
      <button className={showForm ? "cancel" : "add"} onClick={toggleForm}>
        {showForm ? "Cancel" : "Add"}
      </button>
    </div>
  );
}

export default Education;

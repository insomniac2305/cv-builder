import React, { useState } from "react";

function Work() {
  const [stages, setStages] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [stageEdited, setStageEdited] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);

    if (!showForm) {
      setCompany("");
      setPosition("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setStageEdited(null);
    }
  };

  const addStage = (e) => {
    e.preventDefault();

    const newStages = [...stages];
    const changeStage = {
      company,
      position,
      description,
      startDate,
      endDate,
    };

    if (stageEdited) {
      newStages[stageEdited] = changeStage;
    } else {
      newStages.push(changeStage);
    }

    setStages(newStages);
    setCompany("");
    setPosition("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setShowForm(false);
    setStageEdited(null);
  };

  const editStage = (e) => {
    const stageId = e.target.dataset.key;
    const stage = stages[stageId];
    setCompany(stage.company);
    setPosition(stage.position);
    setDescription(stage.description);
    setStartDate(stage.startDate);
    setEndDate(stage.endDate);
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
      company: setCompany,
      position: setPosition,
      description: setDescription,
      startDate: setStartDate,
      endDate: setEndDate,
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
        <div className="label">Company</div>
        <div className="company">{stage.company || "-"}</div>
      </div>
      <div className="data-row">
        <div className="label">Position</div>
        <div className="position">{stage.position || "-"}</div>
      </div>
      <div className="data-row">
        <div className="label">Description</div>
        <div className="description">{stage.description || "-"}</div>
      </div>
      <div className="data-row">
        <div className="label">From</div>
        <div className="start-date">
          {stage.startDate === "" ? "-" : new Date(stage.startDate).toLocaleDateString()}
        </div>
      </div>
      <div className="data-row">
        <div className="label">Until</div>
        <div className="end-date">{stage.endDate === "" ? "-" : new Date(stage.endDate).toLocaleDateString()}</div>
      </div>
    </div>
  ));

  return (
    <div className="work">
      <h2>Work experience</h2>
      {stageList}
      {showForm && (
        <form onSubmit={addStage}>
          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" value={company} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="position">Position</label>
            <input type="text" name="position" id="position" value={position} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" value={description} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="startDate">From</label>
            <input type="date" name="startDate" id="startDate" value={startDate} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="endDate">Until</label>
            <input type="date" name="endDate" id="endDate" value={endDate} onChange={handleChange} />
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

export default Work;

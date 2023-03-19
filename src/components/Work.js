import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stages: [],
      company: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      showForm: false,
      editStage: null,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.addStage = this.addStage.bind(this);
    this.editStage = this.editStage.bind(this);
    this.deleteStage = this.deleteStage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleForm() {
    const newState = {
      showForm: !this.state.showForm,
    };

    if (!newState.showForm) {
      newState.company = "";
      newState.position = "";
      newState.description = "";
      newState.startDate = "";
      newState.endDate = "";
      newState.editStage = null;
    }

    this.setState(newState);
  }

  addStage(e) {
    e.preventDefault();

    const { stages, company, position, description, startDate, endDate, editStage } = this.state;
    const newStages = [...stages];
    const changeStage = {
      company,
      position,
      description,
      startDate,
      endDate,
    };

    if (editStage) {
      newStages[editStage] = changeStage;
    } else {
      newStages.push(changeStage);
    }

    this.setState({
      stages: newStages,
      company: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      showForm: false,
      editStage: null,
    });
  }

  editStage(e) {
    const stageId = e.target.dataset.key;
    const stage = this.state.stages[stageId];
    this.setState({
      company: stage.company,
      position: stage.position,
      description: stage.description,
      startDate: stage.startDate,
      endDate: stage.endDate,
      showForm: true,
      editStage: stageId,
    });
  }

  deleteStage(e) {
    const stageId = e.target.dataset.key;
    const newStages = [...this.state.stages];
    newStages.splice(stageId, 1);
    this.setState({
      stages: newStages,
    });
  }

  handleChange(e) {
    this.setState((state) => ({
      [e.target.name]: e.target.value,
    }));
  }

  render() {
    const { stages, company, position, description, startDate, endDate, showForm } = this.state;
    const stageList = stages.map((stage, index) => (
      <div key={index} className="stage">
        <div className="actions">
          <button className="edit" onClick={this.editStage} data-key={index}>
            Edit
          </button>
          <button className="delete" onClick={this.deleteStage} data-key={index}>
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
          <form onSubmit={this.addStage}>
            <div className="form-row">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" value={company} onChange={this.handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="position">Position</label>
              <input type="text" name="position" id="position" value={position} onChange={this.handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" value={description} onChange={this.handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="startDate">From</label>
              <input type="date" name="startDate" id="startDate" value={startDate} onChange={this.handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="endDate">Until</label>
              <input type="date" name="endDate" id="endDate" value={endDate} onChange={this.handleChange} />
            </div>
            <button type="submit">Save</button>
          </form>
        )}
        <button className={showForm ? "cancel" : "add"} onClick={this.toggleForm}>
          {showForm ? "Cancel" : "Add"}
        </button>
      </div>
    );
  }
}

export default Work;

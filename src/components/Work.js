import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stages: [],
      institution: "",
      degree: "",
      dateFinished: "",
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
    this.setState((state) => ({
      showForm: !state.showForm,
    }));
  }

  addStage(e) {
    e.preventDefault();

    const { stages, institution, degree, dateFinished, editStage } = this.state;
    const newStages = [...stages];

    if (editStage) {
      newStages[editStage] = {
        institution,
        degree,
        dateFinished,
      };
    } else {
      newStages.push({
        institution,
        degree,
        dateFinished,
      });
    }

    this.setState({
      stages: newStages,
      institution: "",
      degree: "",
      dateFinished: "",
      showForm: false,
      editStage: null,
    });
  }

  editStage(e) {
    const stageId = e.target.dataset.key;
    const stage = this.state.stages[stageId];
    this.setState({
      institution: stage.institution,
      degree: stage.degree,
      dateFinished: stage.dateFinished,
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
    const { stages, institution, degree, dateFinished, showForm } = this.state;
    const stageList = stages.map((stage, index) => (
      <div key={index} className="stage">
        <button className="Edit" onClick={this.editStage} data-key={index}>
          Edit
        </button>
        <button className="Delete" onClick={this.deleteStage} data-key={index}>
          Delete
        </button>
        <div className="label">Institution</div>
        <div className="institution">{stage.institution || "-"}</div>
        <div className="label">Degree</div>
        <div className="degree">{stage.degree || "-"}</div>
        <div className="label">Date finished</div>
        <div className="date-finished">
          {stage.dateFinished === "" ? "-" : new Date(stage.dateFinished).toLocaleDateString()}
        </div>
      </div>
    ));

    return (
      <div className="education">
        <h2>Education</h2>
        {stageList}
        {showForm && (
          <form onSubmit={this.addStage}>
            <label htmlFor="institution">Institution</label>
            <input type="text" name="institution" id="institution" value={institution} onChange={this.handleChange} />
            <label htmlFor="degree">Degree</label>
            <input type="text" name="degree" id="degree" value={degree} onChange={this.handleChange} />
            <label htmlFor="dateFinished">Date finished</label>
            <input
              type="date"
              name="dateFinished"
              id="dateFinished"
              value={dateFinished}
              onChange={this.handleChange}
            />
            <button type="submit">Save</button>
          </form>
        )}
        <button className="Add" onClick={this.toggleForm}>
          {showForm ? "Cancel" : "Add"}
        </button>
      </div>
    );
  }
}

export default Education;

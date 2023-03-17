import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      location: "",
      editMode: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggleEdit() {
    this.setState((state) => ({
      editMode: !state.editMode,
    }));
  }

  render() {
    const { name, email, phone, location, editMode } = this.state;

    return (
      <div className="general">
        <button className="edit" onClick={this.toggleEdit}>
          {editMode ? "Save" : "Edit"}
        </button>

        <div className="data-row">
          <div className="label">Name</div>
          {!editMode && <div className="data name">{name}</div>}
          {editMode && <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />}
        </div>

        <div className="data-row">
          <div className="label">E-Mail</div>
          {!editMode && <div className="data email">{email}</div>}
          {editMode && <input type="text" id="email" name="email" value={email} onChange={this.handleChange} />}
        </div>

        <div className="data-row">
          <div className="label">Phone</div>
          {!editMode && <div className="data phone">{phone}</div>}
          {editMode && <input type="text" id="phone" name="phone" value={phone} onChange={this.handleChange} />}
        </div>

        <div className="data-row">
          <div className="label">Location</div>
          {!editMode && <div className="data location">{location}</div>}
          {editMode && (
            <input type="text" id="location" name="location" value={location} onChange={this.handleChange} />
          )}
        </div>
      </div>
    );
  }
}

export default General;

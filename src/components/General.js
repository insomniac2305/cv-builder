import React, { useState } from "react";

function General() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const stateHandler = {
      name: setName,
      email: setEmail,
      phone: setPhone,
      location: setLocation,
    };

    stateHandler[e.target.name](e.target.value);
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const onEnterKey = (e) => {
    e.key === "Enter" && toggleEdit();
  };

  return (
    <div className="general">
      <h2>General information</h2>
      <div className="actions">
        <button className="edit" onClick={toggleEdit}>
          {editMode ? "Save" : "Edit"}
        </button>
      </div>

      <div className="data-row">
        <div className="label">Name</div>
        {!editMode && <div className="data name">{name || "-"}</div>}
        {editMode && (
          <input type="text" id="name" name="name" value={name} onChange={handleChange} onKeyDown={onEnterKey} />
        )}
      </div>

      <div className="data-row">
        <div className="label">E-Mail</div>
        {!editMode && <div className="data email">{email || "-"}</div>}
        {editMode && (
          <input type="text" id="email" name="email" value={email} onChange={handleChange} onKeyDown={onEnterKey} />
        )}
      </div>

      <div className="data-row">
        <div className="label">Phone</div>
        {!editMode && <div className="data phone">{phone || "-"}</div>}
        {editMode && (
          <input type="text" id="phone" name="phone" value={phone} onChange={handleChange} onKeyDown={onEnterKey} />
        )}
      </div>

      <div className="data-row">
        <div className="label">Location</div>
        {!editMode && <div className="data location">{location || "-"}</div>}
        {editMode && (
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleChange}
            onKeyDown={onEnterKey}
          />
        )}
      </div>
    </div>
  );
}

export default General;

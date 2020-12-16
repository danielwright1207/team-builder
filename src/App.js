import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Member from "./components/Member";
import MemberForm from "./components/MemberForm";

const initialFormValues = {
  username: "",
  email: "",
  role: "", // dropdown
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
  };

  return (
    <div className="container">
      <h1>TeamMember</h1>
      <MemberForm values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;

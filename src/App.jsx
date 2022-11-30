import React from "react";
import { useState } from "react";

import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";

import "./App.css";

const App = () => {
  const [note, setNote] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const formHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setShowPopup(true);
    e.target.reset();
  };

  const closePopup = () => {
    setShowPopup(false);
    setNote({
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    });
  };
  return (
    <div className="app">
      <h1>hi</h1>
      <div className="form-view-container">
        <Form formHandler={formHandler} submitHandler={submitForm} />
        <View {...note} />
        <Notes />
        {showPopup && <Popup closePopup={closePopup} {...note} />}
      </div>
    </div>
  );
};

export default App;

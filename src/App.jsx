import React, { useState } from "react";
import axios from "axios";

import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";

import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [note, setNote] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  /*   const [notesNeedRefresh, setNotesNeedRefresh] = useState(false);
   */
  const changeHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const postHandler = () => {
    axios
      .post("http://localhost:3001/notes", note)
      .then((res) => window.location.reload())
      .catch((error) => console.log(error));
    /*     setNotesNeedRefresh(!notesNeedRefresh);
    console.log(notesNeedRefresh); */
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
        <Form formHandler={changeHandler} submitHandler={submitForm} />
        <View {...note} />
        {showPopup && (
          <Popup postHandler={postHandler} closePopup={closePopup} {...note} />
        )}
      </div>
      <Notes /* refresh={notesNeedRefresh} */ />
    </div>
  );
};

export default App;

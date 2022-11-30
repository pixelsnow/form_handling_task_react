import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Notes.css";

const Notes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => setData(res.data));
  }, []);

  return (
    <div className="notes">
      <h2>notessss</h2>
      <ul>
        {data.map((note) => {
          return (
            <li key={note.id}>
              {note.firstname}, {note.lastname}, {note.phone}, {note.role},{" "}
              {note.message}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notes;

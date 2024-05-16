import React, { useEffect, useState } from "react";
import List from "../Components/List/List";
import "./Comenta.css";
import { RiCornerRightDownLine } from "react-icons/ri";
import axios from "axios";
import { baseURL } from "../Components/utils/constant";


const Comenta = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, [updateUI]);

  const comenta = () => {
    axios.post(`${baseURL}/save`, { task: input }).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const Actualiza = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task: input }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("");
    });
  };

  return (
    <main>
      <p className="comenta">
        Déjanos tu comentario!!! <RiCornerRightDownLine />
      </p>
      <div className="input-holder">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="6"
          cols="200"
        ></textarea>
        <button
          id="uno"
          type="submit"
          onClick={updateId ? Actualiza : Comenta}
        >
          {updateId ? "Actualiza" : "Comenta"}
        </button>
      </div>
      <ul className="comentarios">
        {tasks.map((task) => (
          <List
            key={task._id}
            id={task._id}
            task={task.task}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </main>
  );
};

export default Comenta;

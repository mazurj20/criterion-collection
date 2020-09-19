import React, { useEffect, useState } from "react";
import axios from "./axios.js";

import "./App.css";
import { Header } from "./Header.js";
import { Films } from "./Films.js";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get("/").then((res) => {
      setFilms(res.data);
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Films films={films} />
    </div>
  );
}

export default App;

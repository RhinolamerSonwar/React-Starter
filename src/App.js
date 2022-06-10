import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;

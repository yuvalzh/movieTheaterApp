import React from "react";
import "./App.css";

import HomePage from "./components/Page/HomePage";
import MovieOrderPage from "./components/Page/MovieOrderPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<MovieOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

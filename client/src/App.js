import React from "react";
import "./App.css";

import HomePage from "./components/Page/HomePage";
import OrderPage from "./components/Page/OrderPage";
import AdminPage from "./components/Page/AdminPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

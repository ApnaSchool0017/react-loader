import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidbar";
import MainContent from "./components/MainContent";
import Table from "./components/Table";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sidebar/" element={<Sidebar />}>
        <Route index element={<MainContent />} />
        <Route path="table" element={<Table />} />
      </Route>
    </Routes>
  );
};

export default App;

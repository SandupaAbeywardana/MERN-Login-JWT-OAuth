import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";

import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

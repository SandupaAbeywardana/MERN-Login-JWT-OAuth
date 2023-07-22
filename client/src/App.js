import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/account/login" element={<Login />} />
      <Route path="/account/signup" element={<Signup />} />
    </Routes>
  </div>;
}

export default App;

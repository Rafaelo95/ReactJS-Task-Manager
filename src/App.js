import { BrowserRouter, Route, Routes } from "react-router-dom";

// styles
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";
import Create from "./components/create/Create";
import Login from "./components/login/Login";
import Project from "./components/project/Project";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

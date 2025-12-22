import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectNozzle from './pages/ProjectNozzle';
import ProjectTurbine from './pages/ProjectTurbine';
import ProjectRover from './pages/ProjectRover';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/nozzle" element={<ProjectNozzle />} />
          <Route path="/project/turbine" element={<ProjectTurbine />} />
          <Route path="/project/rover" element={<ProjectRover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

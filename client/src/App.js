import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import {Mental, Emergency, Insurance, Facilities, Drugs, Policies, InsuranceForm} from "./components/health";

function App() {
	
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="health/mental" element={<Mental />} />
      <Route path="health/emergency" element={<Emergency />} />
      <Route path="health/insurance" element={<Insurance />} />
      <Route path="health/facilities" element={<Facilities />} />
      <Route path="health/policies" element={<Policies />} />
      <Route path="health/drugs" element={<Drugs />} />
      	
      </Route>
      <Route path="insuranceform" element={<InsuranceForm />} />
      </Routes>
    </div>
  );
}

export default App;

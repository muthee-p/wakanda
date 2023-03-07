import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";



function App() {
	
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
      	
      	<Route path="*" element={<PageNotFound />} />
      	
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

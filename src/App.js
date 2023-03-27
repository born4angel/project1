import React from 'react';
import './App.css';
import ApiData from './Components/ApiData';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
   <Route path='/' exact element={<ApiData/>}/>
   <Route  path='/details/:id' exact element={<Details/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

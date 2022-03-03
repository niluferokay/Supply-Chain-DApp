import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Products from './components/pages/Products';
import Assessments from './components/pages/Assessments';
import LCAForm from './components/pages/LCAForm';

function App() {
    return (
        <>
        <Router>
            <Routes>
            <Route path="/" element= {<Dashboard/>}/>
            <Route path="/products" element= {<Products/>}/>
            <Route path="/assessments" element= {<Assessments/>}/>
            <Route path="/assessments/lca" element= {<LCAForm/>}/>
            </Routes>
        </Router>
        </>
      );
    }

export default App;

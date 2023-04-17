import React from 'react'
import { Routes, Route} from "react-router-dom";

import Home from "../pages/Home"
import Novels from '../pages/Novels';
import {Dashboard}  from '../pages/Dashboard';

function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/novel" element={<Novels />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  )
}

export default PageRoutes ;
import React from 'react'
import { Routes, Route} from "react-router-dom";

import Home from "../pages/Home"
import Novels from '../pages/Novels';
import Pos  from '../pages/Pos';

function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/novel" element={<Novels />}/>
      <Route path="/pos" element={<Pos />}/>
    </Routes>
  )
}

export default PageRoutes ;
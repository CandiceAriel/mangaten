import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home"
import Novels from '../pages/Novels';

function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/novel" element={<Novels />}/>
    </Routes>
  )
}

export default PageRoutes ;
/* 
Name: Chiayi Lin
StudentID: 301448962
Date: 09.27.24
File name: MainRouter.jsx
Section: COMP229 SEC 010 
*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Project from './components/Project'
import Layout from './components/Layout'

const MainRouter = () => {
    return (
      <div>
        
   <div className="hero_area">
        <Layout/>
        <Routes>
          <Route exact path="/MyPortfolio/" element={<Home />} />
          <Route exact path="/MyPortfolio/about" element={<About />} />
          <Route exact path="/MyPortfolio/contact" element={<Contact />} />
          <Route exact path="/MyPortfolio/service" element={<Service />} />
          <Route exact path="/MyPortfolio/project" element={<Project />} />
        </Routes>
      </div>
    </div>
    )
  }
  export default MainRouter
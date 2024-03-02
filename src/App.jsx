import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import React from 'react'

import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route exact path="/" element={<Login />}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

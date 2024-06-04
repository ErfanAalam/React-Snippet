import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SaveStudents from './SaveStudents.jsx'
import SaveTeacher from './SaveTeacher.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/saveStudent' element={<SaveStudents />}></Route>
      <Route path='/saveTeacher' element={<SaveTeacher />}></Route>
    </Routes>
  </Router>
    // <App />
)

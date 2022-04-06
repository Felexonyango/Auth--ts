import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Auth/Signup'
import "./App.css"
import SignIn from './components/Auth/SignIn'
import Home from './components/Home/Home'
const App = () => {
  return (
    <>
    <Router>
     <Routes>
            <Route  path='/' element={<Home />}/>
            <Route path='/register' element={<Signup />}/>
            <Route path='/login' element={<SignIn />}/>
          </Routes>
        
    </Router>
    </>
  )
}

export default App
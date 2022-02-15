import React, { useContext } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/header/Header"
import CallLogs from "./pages/CallLogs"
import { UserContext } from "./context/UserContext"

function App() {
  const { token } = useContext(UserContext)
  return (
    <div className='main-iphone-outer-body'>
      <div className='main-iphone-body'>
        <div className='iphone-upersection'>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='iphone-screen'>
          {!token ? (
            <Router>
              <Header />
              <Routes>
                <Route index element={<Home />} />
              </Routes>
            </Router>
          ) : (
            <Router>
              <Header logOut='logOut' />
              <Routes>
                <Route index element={<CallLogs />} />
              </Routes>
            </Router>
          )}
        </div>
        <div className='iphone-lowerBody'>
          <div></div>
        </div>
      </div>
      <div className='btns-outer mute'></div>
      <div className='btns-outer volume-up'></div>
      <div className='btns-outer volume-down'></div>
      <div className='btns-outer powerbtn'></div>
    </div>
  )
}

export default App

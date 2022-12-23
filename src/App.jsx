import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ProtectedRoute from './Components/ProtectedRoute'
import Home from './Components/Home'
import { UserAuthContextProvider } from './Context/userAuthContext'
function App() {
  return (
    <>
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
              <Route path="/home" element={
              <ProtectedRoute>
                  <Home/>
              </ProtectedRoute>}></Route>
                  <Route path="/" element={<Login/>}></Route>
                  <Route path="/Signup" element={<Signup/>}></Route>
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App

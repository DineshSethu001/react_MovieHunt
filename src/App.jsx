import React from 'react'
import {Header, Footer} from "./components/index"
import AllRoutes from './routes/AllRoutes'
import "./App.css"
function App() {
  return (
    <div>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App